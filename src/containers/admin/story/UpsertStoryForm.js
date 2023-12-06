import { useEffect, useRef, useState } from "react";
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
import { setGenresFilter } from "../../../features/storySlice";

import storyDefaultImage from "../../../assets/stories/default.png";
import { useNavigate, useParams } from "react-router-dom";
import { handleShowStoryService } from "../../../services/StoryService";
import ChapterList from "../../chapter/ChapterList";
import AdminLayout from "../layouts/AdminLayout";
import "./UpsertStoryForm.scss";
import _ from "lodash";
import StoryGenre from "./StoryGenre";
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
  const user = useSelector((state) => state.user);
  const initStory = {
    id: "",
    name: "",
    avatar: "",
    view: 1,
    genres_id: [],
    user_id: user.id,
    author_name: "",
    description: "",
    slug: "",
  };
  const genreType = [
    {
      title: "category",
      value: 1,
    },
    {
      title: "character",
      value: 2,
    },
    {
      title: "world building",
      value: 3,
    },
    {
      title: "tags",
      value: 4,
    },
  ];

  const dispatch = useDispatch();
  const { slug: storySlug } = useParams();
  const genresFilter = useSelector((state) => state.story.genresFilter);
  const [genres, setGenres] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const imgRef = useRef();
  const [story, setStory] = useState({
    ...initStory,
  });
  const navigate = useNavigate();

  // const [showChapterList, setShowChapterList] = useState(false);
  useEffect(() => {
    if (_.isEmpty(genresFilter)) {
      async function fetchGenre() {
        let res = await handleGetGenreService();
        if (res?.success) {
          dispatch(setGenresFilter(res.data));
        }
      }
      fetchGenre();
    }
    if (isUpdate) {
      async function fetchStory() {
        try {
          let res = await handleShowStoryService(storySlug);
          if (res?.success) {
            let cpStory = { ...res.data };
            let data = computedStory(cpStory);
            setStory({ ...data });
            setSelectedGenres(cpStory.genres);
          }
        } catch (error) {}
      }

      fetchStory();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!_.isEmpty(genresFilter)) {
      let genreTypeCp = [...genreType];
      let genres_id =
        selectedGenres?.length > 0 ? selectedGenres.map((item) => item.id) : [];
      genreTypeCp = genreTypeCp.map((item) => {
        let genresSplitted = genresFilter.filter(
          (genre) => genre.type === item.value
        );
        return {
          ...item,
          genres: genresSplitted,
          genreSelected:
            genresSplitted.find((genre) => genres_id?.includes(genre.id)) ||
            null,
        };
      });
      setGenres(genreTypeCp);
      setStory({ ...story, genres_id });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenres]);
  const computedStory = (data) => {
    let genres_id = (genres?.length > 0 && genres.map((item) => item.id)) || [];
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
      if (checkPropertiesIsEmpty(story, ["avatar"])) {
        toast.error("Không được để trống!");
      } else {
        try {
          let cpStory = { ...story };
          if (!(cpStory.avatar instanceof File)) {
            cpStory["avatar"] = null;
          }
          let res = await handleUpdateStoryService(cpStory);
          if (res?.success) {
            toast.success("Cập nhật thành công!");
            let data = res.data;
            let computedData = computedStory(data);
            setStory({ ...computedData });
          }
        } catch (error) {
          handleErrorApiResponse(error);
        }
      }
    } else {
      if (checkPropertiesIsEmpty(story, ["id"])) {
        toast.error("Không được để trống!");
      } else {
        try {
          let res = await handleCreateStoryService(story);
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
    }
  };
  return (
    <AdminLayout
      offcanvasTitle={"Danh sách chương"}
      offcanvasBody={<ChapterList isAdmin={true} />}
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
            <div className="col-lg-4 col-sm-8">
              <label htmlFor="avatar" className="avatar-box">
                <img
                  alt="Not Found"
                  className="avatar w-100"
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

            <div className="col-lg-4 col-sm-4">
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
          <div className="col-12">
            <label>Tên tác giả</label>
            <input
              className="form-control"
              type={"text"}
              value={story.author_name}
              onChange={(e) => handleSetInput(e, "author_name")}
            />
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
