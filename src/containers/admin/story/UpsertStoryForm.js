import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { handleGetGenreService } from "../../../services/GenreService";
import {
  handleCreateStoryService,
  handleUpdateStoryService,
} from "../../../services/AdminServices";
import {
  asset,
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setTagsFilter } from "../../../features/storySlice";
import "./UpsertStoryForm.scss";
import storyDefaultImage from "../../../assets/stories/default.jpg";
import { useParams } from "react-router-dom";
import { handleShowStoryService } from "../../../services/StoryService";
import TextEditor from "../../../components/TextEditor";

import ChapterList from "../../chapter/ChapterList";
import Modal from "react-bootstrap/Modal";
const status = [
  {
    state: "Mới ra",
    id: 1,
  },
  {
    state: "Đang ra",
    id: 2,
  },
  {
    state: "Đã hoàn thành",
    id: 3,
  },
];
const views = [
  {
    view: "Nam",
    id: 1,
  },
  {
    view: "Nữ",
    id: 2,
  },
  {
    view: "Khác",
    id: 3,
  },
];
const UpsertStoryForm = ({ isUpdate }) => {
  const dispatch = useDispatch();
  const { id: storyId } = useParams();
  const tagsFilter = useSelector((state) => state.story.tagsFilter);
  const user = useSelector((state) => state.user);
  const [storyTag, setStoryTag] = useState({});
  const [selectedTag, setSelectedTag] = useState({});
  const imgRef = useRef();
  const [story, setStory] = useState({
    id: "",
    name: "",
    avatar: "",
    status: 1,
    view: 1,
    genres_id: [],
    user_id: user.id,
    author_name: "",
  });

  const [showChapterList, setShowChapterList] = useState(false);
  const [storyDescription, setStoryDescription] = useState("");
  useEffect(() => {
    if (tagsFilter?.length === 0) {
      async function fetchGenre() {
        let res = await handleGetGenreService();
        if (res?.success) {
          dispatch(setTagsFilter(res.data));
        }
      }
      fetchGenre();
    }
    if (isUpdate) {
      async function fetchStory() {
        try {
          let res = await handleShowStoryService(storyId);
          if (res?.success) {
            let cpStory = { ...res.data };
            let data = computedStory(cpStory);
            setStory({ ...data });
            setStoryDescription(cpStory.description);
            let genres = computeGenre(cpStory.genres);
            setSelectedTag({ ...genres });
          }
        } catch (error) {}
      }

      fetchStory();
    }
  }, []);

  useEffect(() => {
    if (tagsFilter.length > 0) {
      let data = computeGenre(tagsFilter);
      setStoryTag({ ...data });
    }
  }, [tagsFilter]);
  const computeGenre = (data) => {
    let obj = {};
    obj["CATEGORY"] = [];
    obj["CHARACTER"] = [];
    obj["WORLD"] = [];
    obj["TAG"] = [];
    data?.length > 0 &&
      data.forEach((item) => {
        item.value = item.id;
        item.label = item.name;
        switch (item.type) {
          case 1:
            obj["CATEGORY"].push(item);
            break;
          case 2:
            obj["CHARACTER"].push(item);
            break;
          case 3:
            obj["WORLD"].push(item);
            break;
          case 4:
            obj["TAG"].push(item);
            break;
          default:
            break;
        }
      });
    for (const key in obj) {
      if (obj[key].length === 1) {
        obj[key] = obj[key][0];
      }
    }
    return obj;
  };
  const computedStory = (data) => {
    let { name, author_name, avatar, status, user_id, view, genres, id } = data;
    let genres_id = (genres?.length > 0 && genres.map((item) => item.id)) || [];
    return {
      name,
      author_name,
      avatar,
      status,
      user_id,
      view,
      genres_id,
      id,
    };
  };
  useEffect(() => {
    if (!(story.avatar instanceof File)) {
      return;
    }
    let url = URL.createObjectURL(story.avatar);
    let { current: img } = imgRef;
    img.src = url;
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [story.avatar]);

  const handleSetInput = (e, name) => {
    let cpStory = { ...story };
    if (name === "avatar") {
      cpStory[name] = e.target.files[0];
      setStory(cpStory);
      return;
    }
    cpStory[name] = e.target.value;
    setStory(cpStory);
  };
  const handleChangeSelect = (options, name) => {
    let cpTag = { ...selectedTag };
    cpTag[name] = options;
    setSelectedTag({ ...cpTag });
    let genres_id = [];
    for (let key in cpTag) {
      genres_id.push(cpTag[key].id);
    }

    setStory({ ...story, genres_id: genres_id });
  };

  const handleUpsertStory = async () => {
    if (isUpdate) {
      if (checkPropertiesIsEmpty(story, ["avatar"])) {
        toast.error("Không được để trống!");
      } else {
        try {
          let cpStory = { ...story };
          cpStory["description"] = storyDescription;
          if (!(cpStory.avatar instanceof File)) {
            cpStory["avatar"] = null;
          }
          let res = await handleUpdateStoryService(cpStory);
          if (res?.success) {
            toast.success("Cập nhật thành công!");
            let data = res.data;
            let computedData = computedStory(data);
            setStory({ ...computedData });
            setStoryDescription(data.description);
            let genres = computeGenre(data.genres);
            setSelectedTag({ ...genres });
          }
        } catch (error) {
          handleErrorApiResponse(error);
        }
      }
    } else {
      if (checkPropertiesIsEmpty(story)) {
        toast.error("Không được để trống!");
      } else {
        try {
          let res = await handleCreateStoryService(story);
          if (res?.success) {
            toast.success("Tạo truyện thành công!");
            setStory({
              name: "",

              avatar: "",
              status: 1,
              view: 1,
              genres_id: [],
              user_id: user.id,
              author_name: "",
            });
            setStoryDescription("");
            setSelectedTag({});
          }
        } catch (error) {
          handleErrorApiResponse(error);
        }
      }
    }
  };
  const handleShowChapterList = () => {
    setShowChapterList(true);
  };
  return (
    <>
      <div className="container content">
        <div className="row">
          <div className="col-12">
            <label>Tên truyện</label>
            <input
              className="form-control"
              type={"text"}
              value={story.name}
              onChange={(e) => handleSetInput(e, "name")}
            />
          </div>
          <div className="col-3">
            <label htmlFor="avatar" className="avatar-box">
              <img
                alt="Not Found"
                className="avatar"
                src={story.avatar ? asset(story.avatar) : storyDefaultImage}
                ref={imgRef}
              />
              Ảnh đại diện
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => handleSetInput(e, "avatar")}
                id="avatar"
                hidden
              />
            </label>
          </div>
          <div className="col-3">
            <label>Trạng thái</label>
            {status?.length > 0 &&
              status.map((item) => {
                return (
                  <div className="form-group" key={item.id}>
                    <input
                      type={"radio"}
                      className="form-check-input"
                      name="status"
                      value={item.id}
                      onChange={(e) => handleSetInput(e, "status")}
                      checked={+story.status === +item.id}
                    />
                    <label>{item.state}</label>
                  </div>
                );
              })}
          </div>
          <div className="col-3">
            <label>Góc nhìn</label>
            {views?.length > 0 &&
              views.map((item) => {
                return (
                  <div className="form-group" key={item.id}>
                    <input
                      type={"radio"}
                      className="form-check-input"
                      name="view"
                      value={item.id}
                      onChange={(e) => handleSetInput(e, "view")}
                      checked={+story.view === +item.id}
                    />
                    <label>{item.view}</label>
                  </div>
                );
              })}
          </div>
          {isUpdate && (
            <div className="col-3">
              <button
                className="btn btn-primary"
                onClick={() => handleShowChapterList()}
              >
                Danh sách chương
              </button>
            </div>
          )}
          <div className="col-12 description-box">
            <label>Mô tả truyện</label>
            <TextEditor
              value={storyDescription}
              setValue={setStoryDescription}
              className={"story-description-editor"}
            />
          </div>
          <div className="col-12">
            <label>Tên tác giả</label>
            <input
              className="form-control"
              type={"text"}
              value={story.author_name}
              onChange={(e) => handleSetInput(e, "author_name")}
            />
          </div>

          <div className="col-lg-3 col-sm-6">
            <label>Thể loại</label>
            <Select
              options={storyTag["CATEGORY"]}
              onChange={(options) => handleChangeSelect(options, "CATEGORY")}
              value={selectedTag?.CATEGORY || null}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <label>Tính cách nhân vật</label>
            <Select
              options={storyTag["CHARACTER"]}
              onChange={(options) => handleChangeSelect(options, "CHARACTER")}
              value={selectedTag?.CHARACTER || null}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <label>Bối cảnh thể giới</label>
            <Select
              options={storyTag["WORLD"]}
              onChange={(options) => handleChangeSelect(options, "WORLD")}
              value={selectedTag?.WORLD || null}
            />
          </div>
          <div className="col-lg-3 col-sm-6">
            <label>Lưu phái</label>
            <Select
              options={storyTag["TAG"]}
              onChange={(options) => handleChangeSelect(options, "TAG")}
              value={selectedTag?.TAG || null}
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-success"
              onClick={() => handleUpsertStory()}
            >
              {" "}
              {isUpdate ? "Cập nhât" : "Tạo"}
            </button>
          </div>
        </div>
      </div>
      <Modal show={showChapterList} onHide={() => setShowChapterList(false)}>
        <Modal.Header closeButton>
          <Modal.Title>DS. Chương</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChapterList isAdmin={true} storyId={storyId} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default UpsertStoryForm;
