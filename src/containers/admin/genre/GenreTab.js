import { useEffect, useState } from "react";
import {
  handleDeleteGenreService,
  handleUpdateGenreService,
} from "../../../services/GenreService";
import { toast } from "react-toastify";

const GenreTab = ({ genres = [], setDeletedGenre }) => {
  const [genreUpdate, setGenreUpdate] = useState([]);
  const EDIT = 0;
  const SAVE = 1;

  useEffect(() => {
    if (genres?.length > 0) {
      let genreUpdateCp = [...genres];
      genreUpdateCp = genreUpdateCp.map((item) => {
        return {
          ...item,
          status: EDIT,
        };
      });
      setGenreUpdate(genreUpdateCp);
    }
  }, [genres]);
  const handleChangeGenreStatus = (genreId, status) => {
    let genreUpdateCp = [...genreUpdate];
    genreUpdateCp = genreUpdateCp.map((item) => {
      return item.id === genreId ? { ...item, status } : item;
    });
    setGenreUpdate(genreUpdateCp);
  };
  const handleEditGenre = async (genreId, status) => {
    if (status === EDIT) {
      handleChangeGenreStatus(genreId, SAVE);
    } else {
      let genre = genreUpdate.find((item) => item.id === genreId);

      if (genre) {
        try {
          let res = await handleUpdateGenreService(genreId, {
            name: genre.name,
          });
          if (res?.success) {
            toast.success("Update genre success!");
            handleChangeGenreStatus(genreId, EDIT);
          }
        } catch (error) {
          toast.error("Update genre error");
        }
      }
    }
  };
  const handleChangeGenre = (e, genreId) => {
    let value = e.target.value;
    let genreUpdateCp = [...genreUpdate];
    genreUpdateCp = genreUpdateCp.map((item) => {
      return item.id === genreId ? { ...item, name: value } : item;
    });
    setGenreUpdate(genreUpdateCp);
  };
  const handleDeleteGenre = async (genre) => {
    try {
      let res = await handleDeleteGenreService(genre.id);
      if (res?.success) {
        toast.success("Delete Genre Success");
        setDeletedGenre(genre);
      }
    } catch (error) {
      toast.error("Delete Genre Error");
    }
  };
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {genreUpdate?.length > 0 &&
          genreUpdate.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.status === EDIT ? (
                    item.name
                  ) : (
                    <input
                      value={item.name}
                      onChange={(e) => handleChangeGenre(e, item.id)}
                    />
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditGenre(item.id, item.status)}
                  >
                    {item.status === EDIT ? "Edit" : "Save"}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteGenre(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default GenreTab;
