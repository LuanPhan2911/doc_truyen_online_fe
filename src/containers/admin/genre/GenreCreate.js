import _ from "lodash";
import { useState } from "react";
import { toast } from "react-toastify";
import { handleCreateGenreService } from "../../../services/GenreService";
const GenreCreate = ({ genreType, setNewGenres }) => {
  const [genre, setGenre] = useState({
    name: "",
    type: 1,
  });
  const handleCreateGenres = async () => {
    let genres = [];
    let splitName = genre.name.split("\n");
    splitName?.length > 0 &&
      splitName.forEach((item) => {
        if (!_.isEmpty(item)) {
          genres = [
            ...genres,
            {
              name: _.trim(item),
              type: +genre.type,
            },
          ];
        }
      });
    if (_.isEmpty(genres)) {
      toast.error("Genre is empty!");
    } else {
      try {
        let res = await handleCreateGenreService(genres);
        if (res?.success) {
          let data = res.data;
          toast.success("Create Genre Success");
          setGenre({
            name: "",
            type: +genre.type,
          });

          setNewGenres([...data]);
        }
      } catch (error) {
        toast.error("Create Genre Error!");
      }
    }
  };

  return (
    <div className="row">
      <div className="md-3 col-md-6">
        <label>Genres List</label>
        <textarea
          className="form-control"
          rows={5}
          onChange={(e) => setGenre({ ...genre, name: e.target.value })}
          placeholder="Use enter to separate genre"
          value={genre.name}
        ></textarea>
      </div>
      <div className="md-3 col-md-6">
        <label>Genres Type</label>
        <select
          className="form-select text-capitalize"
          onChange={(e) => setGenre({ ...genre, type: e.target.value })}
        >
          {genreType?.length > 0 &&
            genreType.map((item) => {
              return (
                <option
                  key={item.title}
                  value={item.value}
                  className="text-capitalize"
                >
                  {item.title}
                </option>
              );
            })}
        </select>

        <button
          className="btn btn-success my-2"
          onClick={() => handleCreateGenres()}
        >
          Create
        </button>
      </div>
    </div>
  );
};
export default GenreCreate;
