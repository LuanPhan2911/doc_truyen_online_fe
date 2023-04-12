import { useEffect, useState } from "react";
import Select from "react-select";
import { useFetch } from "../../../hooks/useFetch";
import { handleGetGenreService } from "../../../services/GenreService";

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
    avatar: "",
    status: 1,
    view: 1,
    genresId: [],
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
  };
  const handleCreateStory = () => {
    let genresId = [];
    for (const key in genreId) {
      if (Object.hasOwnProperty.call(genreId, key)) {
        const element = genreId[key];
        element?.length > 0 &&
          element.forEach((item) => {
            genresId.push(item);
          });
      }
    }
    setStory({ ...story, genresId: genresId });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
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
          <div className="form-group">
            <input
              type={"radio"}
              className="form-check-input"
              name="status"
              id="status-new"
              value={"1"}
              onChange={(e) => handleSetInput(e, "status")}
            />
            <label htmlFor={"status-new"}>Moi</label>
          </div>
          <div className="form-group">
            <input
              type={"radio"}
              className="form-check-input"
              name="status"
              id="status-releasing"
              value={"2"}
              onChange={(e) => handleSetInput(e, "status")}
            />
            <label htmlFor="status-releasing">Dang ra</label>
          </div>
          <div className="form-group">
            <input
              type={"radio"}
              className="form-check-input"
              name="status"
              id="status-finished"
              value={"3"}
              onChange={(e) => handleSetInput(e, "status")}
            />
            <label htmlFor="status-finished">Da hoan thanh</label>
          </div>
        </div>
        <div className="col-6">
          <label>Goc nhin</label>
          <div className="form-group">
            <input
              type={"radio"}
              className="form-check-input"
              name="view"
              id="view-male"
              value={"1"}
              onChange={(e) => handleSetInput(e, "view")}
            />
            <label htmlFor="view-male">Nam</label>
          </div>
          <div className="form-group">
            <input
              type={"radio"}
              className="form-check-input"
              name="view"
              id="view-female"
              value={"1"}
              onChange={(e) => handleSetInput(e, "view")}
            />
            <label htmlFor="view-female">Nu</label>
          </div>
          <div className="form-group">
            <input
              type={"radio"}
              className="form-check-input"
              name="view"
              id="view-other"
              value={"1"}
              onChange={(e) => handleSetInput(e, "view")}
            />
            <label htmlFor="view-other">Khac</label>
          </div>
        </div>
        <div className="col-3">
          <label>The loai</label>
          <Select
            options={options?.category}
            isMulti
            onChange={(options) => handleChangeSelect(options, "category")}
          />
        </div>
        <div className="col-3">
          <label>Tinh cach nhan vat chinh</label>
          <Select
            options={options?.character}
            isMulti
            onChange={(options) => handleChangeSelect(options, "character")}
          />
        </div>
        <div className="col-3">
          <label>Boi canh the gioi</label>
          <Select
            options={options?.world}
            isMulti
            onChange={(options) => handleChangeSelect(options, "world")}
          />
        </div>
        <div className="col-3">
          <label>Luu phai</label>
          <Select
            options={options?.tag}
            isMulti
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
