import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { handleGetGenreService } from "../../../services/GenreService";
import { handleCreateStoryService } from "../../../services/StoryService";
import {
  asset,
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "../../../features/storySlice";
import "./CreateStoryForm.scss";
import storyDefaultImage from "../../../assets/stories/default.jpg";
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
const CreateStoryForm = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.story.tags);
  const user = useSelector((state) => state.user);
  const [storyTag, setStoryTag] = useState({});
  const [selectedTagId, setSelectedTagId] = useState({});
  const imgRef = useRef();
  const [story, setStory] = useState({
    name: "",
    description: "",
    avatar: "",
    status: 1,
    view: 1,
    genres_id: [],
    user_id: user.id,
  });
  useEffect(() => {
    async function fetch() {
      if (tags?.length === 0) {
        let res = await handleGetGenreService();
        if (res?.success) {
          dispatch(setTags(res.data));
        }
      }
    }
    fetch();
  }, []);
  useEffect(() => {
    if (tags.length > 0) {
      let data = computeData(tags);
      setStoryTag({ ...data });
    }
  }, [tags]);
  const computeData = (data) => {
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
    return obj;
  };
  useEffect(() => {
    if (!story.avatar) {
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
    let cpTagId = selectedTagId;
    cpTagId[name] = options.id;
    setSelectedTagId(cpTagId);
    let genres_id = Object.values(cpTagId);

    setStory({ ...story, genres_id: genres_id });
  };
  const validateStory = (story) => {
    return checkPropertiesIsEmpty(story);
  };

  const handleCreateStory = async () => {
    if (validateStory(story)) {
      toast.error("Không được để trống!");
    } else {
      try {
        let res = await handleCreateStoryService(story);
        if (res?.success) {
          toast.success("Tạo truyện thành công!");
          setStory({
            name: "",
            description: "",
            avatar: "",
            status: 1,
            view: 1,
            genres_id: [],
            user_id: user.id,
          });
        }
      } catch (error) {
        handleErrorApiResponse(error);
      }
    }
  };
  return (
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
        <div className="col-9">
          <label>Mô tả truyện</label>
          <textarea
            className="form-control"
            rows={10}
            value={story.description}
            onChange={(e) => handleSetInput(e, "description")}
          ></textarea>
        </div>
        <div className="col-6">
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
        <div className="col-6">
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
        <div className="col-lg-3 col-sm-6">
          <label>Thể loại</label>
          <Select
            options={storyTag["CATEGORY"]}
            onChange={(options) => handleChangeSelect(options, "CATEGORY")}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <label>Tính cách nhân vật</label>
          <Select
            options={storyTag["CHARACTER"]}
            onChange={(options) => handleChangeSelect(options, "CHARACTER")}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <label>Bối cảnh thể giới</label>
          <Select
            options={storyTag["WORLD"]}
            onChange={(options) => handleChangeSelect(options, "WORLD")}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <label>Lưu phái</label>
          <Select
            options={storyTag["TAG"]}
            onChange={(options) => handleChangeSelect(options, "TAG")}
          />
        </div>
        <div className="col-12">
          <button
            className="btn btn-success"
            onClick={() => handleCreateStory()}
          >
            {" "}
            Tạo
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateStoryForm;
