import { useEffect, useRef, useState } from "react";
import { postStory, getStory, putStory } from "../../../services/AdminServices";
import { asset, handleErrorApiResponse } from "../../../utils/Helper";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import storyDefaultImage from "../../../assets/stories/default.png";
import { useNavigate, useParams } from "react-router-dom";
import ChapterList from "../../../containers/chapter/ChapterList";
import AdminLayout from "../../../containers/admin/layouts/AdminLayout";
import "./UpsertStoryForm.scss";
import _ from "lodash";
import StoryGenre from "../../../containers/admin/story/StoryGenre";
import { useGenresFilter } from "../../../hooks";
import StoryAuthor from "../../../containers/admin/story/StoryAuthor";

const UpsertStoryForm = ({ isUpdate }) => {
  const { slug } = useParams();
  const user = useSelector((state) => state.user);
  const { views } = useSelector((state) => state.story);
  const initStory = {
    id: "",
    name: "",
    avatar: "",
    view: 1,
    genres_id: [],
    user_id: user.id,
    author_id: "",
    description: "",
  };
  const { id: storyId } = useParams();
  const [genres, setGenres] = useGenresFilter();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const imgRef = useRef();
  const [story, setStory] = useState({
    ...initStory,
  });

  const [selectedAuthor, setSelectedAuthor] = useState({});
  const navigate = useNavigate();

  // const [showChapterList, setShowChapterList] = useState(false);
  useEffect(() => {
    if (isUpdate) {
      fetchStory();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!_.isEmpty(genres)) {
      let genres_id =
        selectedGenres?.length > 0 ? selectedGenres.map((item) => item.id) : [];
      let genresCp = [...genres];
      genresCp = genresCp.map((item) => {
        return {
          ...item,
          genreSelected:
            item?.genres?.find((genre) => genres_id?.includes(genre.id)) ||
            null,
        };
      });
      setGenres(genresCp);
      setStory({ ...story, genres_id });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenres]);
  useEffect(() => {
    if (!_.isEmpty(selectedAuthor)) {
      setStory((prev) => {
        return {
          ...prev,
          author_id: selectedAuthor.value,
        };
      });
    }
  }, [selectedAuthor]);

  async function fetchStory() {
    try {
      let res = await getStory(storyId);
      if (res?.success) {
        let cpStory = { ...res.data };
        let data = computedStory(cpStory);
        setStory({ ...data });
        setSelectedGenres(cpStory.genres);
        setSelectedAuthor({
          label: res?.data?.author?.name,
          value: res?.data?.author?.id,
        });
      }
    } catch (error) {}
  }
  const computedStory = (data) => {
    let genres_id =
      (data?.genres?.length > 0 && data?.genres.map((item) => item.id)) || [];
    return {
      ...data,
      genres_id,
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
  const handleUpsertStory = async () => {
    if (isUpdate) {
      try {
        let cpStory = { ...story };
        if (!(cpStory.avatar instanceof File)) {
          cpStory["avatar"] = null;
        }
        let res = await putStory(slug, cpStory);
        if (res?.success) {
          toast.success("Cập nhật thành công!");
          let data = res.data;
          let computedData = computedStory(data);
          setStory({ ...computedData });
        }
      } catch (error) {
        handleErrorApiResponse(error);
      }
    } else {
      try {
        let res = await postStory(story);
        if (res?.success) {
          toast.success("Tạo truyện thành công!");
          setStory({
            ...initStory,
          });

          navigate("/admin/story");
        }
      } catch (error) {
        handleErrorApiResponse(error);
      }
    }
  };
  return (
    <AdminLayout
      offcanvasTitle={"Danh sách chương"}
      offcanvasBody={
        story?.id && <ChapterList isAdmin={true} storyId={story?.id} />
      }
    >
      <div className="container content">
        <div className="row">
          <div className="mb-3">
            <label className="form-label">Tên truyện</label>
            <input
              className="form-control"
              type={"text"}
              value={story.name}
              onChange={(e) => handleSetInput(e, "name")}
            />
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-5">
              <label htmlFor="avatar" className="avatar-box">
                <img
                  alt="Not Found"
                  className="avatar"
                  src={story?.avatar ? asset(story.avatar) : storyDefaultImage}
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

            <div className="row col">
              <div className="col-12">
                <label>Góc nhìn</label>
                <div className="row">
                  {views?.length > 0 &&
                    views.map((item) => {
                      return (
                        <div className="form-group col-4" key={item.id}>
                          <input
                            type={"radio"}
                            className="form-check-input"
                            name="view"
                            value={item.id}
                            onChange={(e) => handleSetInput(e, "view")}
                            checked={+story.view === +item.id}
                          />
                          <label className="form-check-label">
                            {item.view}
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col">
                <StoryAuthor
                  selectedAuthor={selectedAuthor}
                  setSelectedAuthor={setSelectedAuthor}
                />
              </div>
            </div>
          </div>
          {genres?.length > 0 &&
            genres.map((item) => {
              return (
                <StoryGenre
                  genres={item}
                  key={item.value}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={setSelectedGenres}
                />
              );
            })}
          <div className="col-12">
            <label className="form-label">Mô tả truyện</label>
            <textarea
              className="form-control"
              value={story.description}
              onChange={(e) => handleSetInput(e, "description")}
              rows="10"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-success" onClick={() => handleUpsertStory()}>
          {" "}
          {isUpdate ? "Cập nhât" : "Tạo"}
        </button>
      </div>
    </AdminLayout>
  );
};
export default UpsertStoryForm;
