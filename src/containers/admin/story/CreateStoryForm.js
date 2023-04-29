import { useEffect, useState } from "react";
import Select from "react-select";
import { useFetch } from "../../../hooks/useFetch";
import { handleGetGenreService } from "../../../services/GenreService";
import { handleCreateStoryService } from "../../../services/StoryService";
import {
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
const status = [
  {
    state: "Moi ra",
    id: 1,
  },
  {
    state: "Dang ra",
    id: 2,
  },
  {
    state: "Da hoan thanh",
    id: 3,
  },
];
const views = [
  {
    view: "Nam",
    id: 1,
  },
  {
    view: "Nu",
    id: 2,
  },
  {
    view: "Khac",
    id: 3,
  },
];
const CreateStoryForm = () => {
  const [options, setOption] = useState({});
  const { data: genres } = useFetch(handleGetGenreService);
  useEffect(() => {
    buildOption();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genres]);
  function buildOption() {
    let objData = {
      category: [],
      character: [],
      world: [],
      tag: [],
    };
    genres?.length > 0 &&
      genres.map((item) => {
        let obj = {};
        let { id, name, type } = item;
        obj.value = id;
        obj.label = name;
        if (type === 1) {
          objData.category.push(obj);
        } else if (type === 2) {
          objData.character.push(obj);
        } else if (type === 3) {
          objData.world.push(obj);
        } else if (type === 4) {
          objData.tag.push(obj);
        }

        return item;
      });
    setOption(objData);
  }
  const [story, setStory] = useState({
    name: "",
    description: "",
    avatar: null,
    status: 1,
    view: 1,
    genres_id: [],
    user_id: 13,
  });
  const [genreId, setGenresId] = useState({
    category: [],
    character: [],
    world: [],
    tag: [],
  });

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
    let cpGenreId = { ...genreId };
    let arr = [];
    options?.length > 0 &&
      options.map((item) => {
        arr.push(item.value);
        return item;
      });
    cpGenreId[name] = arr;
    setGenresId(cpGenreId);
    let genres_id = [...Object.values(genreId)].flat();
    setStory({ ...story, genres_id: genres_id });
  };
  const validateStory = (story) => {
    return checkPropertiesIsEmpty(story, ["avatar"]);
  };
  const handleCreateStory = async () => {
    // validate du lieu
    if (validateStory(story)) {
      toast.error("Du lieu khong duoc de trong");
    } else {
      try {
        let res = await handleCreateStoryService(story);
        if (res?.success) {
        }
      } catch (error) {
        handleErrorApiResponse(error);
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <label>Tên truyện</label>
          <input
            className="form-control"
            type={"text"}
            value={story.name}
            onChange={(e) => handleSetInput(e, "name")}
          />
        </div>
        <div className="col-6">
          <label>Anh dai dien</label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            //   value={story.avatar}
            onChange={(e) => handleSetInput(e, "avatar")}
          />
        </div>
        <div className="col-12">
          <label>Mo ta truyen</label>
          <textarea
            className="form-control"
            rows={10}
            value={story.description}
            onChange={(e) => handleSetInput(e, "description")}
          ></textarea>
        </div>
        <div className="col-6">
          <label>Trang thai</label>
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
          <label>Goc nhin</label>
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
          <label>The loai</label>
          <Select
            options={options?.category}
            onChange={(options) => handleChangeSelect(options, "category")}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <label>Tinh cach nhan vat chinh</label>
          <Select
            options={options?.character}
            onChange={(options) => handleChangeSelect(options, "character")}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <label>Boi canh the gioi</label>
          <Select
            options={options?.world}
            onChange={(options) => handleChangeSelect(options, "world")}
          />
        </div>
        <div className="col-lg-3 col-sm-6">
          <label>Luu phai</label>
          <Select
            options={options?.tag}
            onChange={(options) => handleChangeSelect(options, "tag")}
          />
        </div>
        <div className="col-12">
          <button
            className="btn btn-success"
            onClick={() => handleCreateStory()}
          >
            {" "}
            Tao
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateStoryForm;
