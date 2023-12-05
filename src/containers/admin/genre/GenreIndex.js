import { useEffect, useState } from "react";
import GenreTab from "./GenreTab";
import { handleGetGenreService } from "../../../services/GenreService";

const GenreIndex = ({ genreType, newGenres, setNewGenres }) => {
  const [genres, setGenres] = useState([...genreType]);
  const [deletedGenre, setDeletedGenre] = useState("");
  useEffect(() => {
    async function fetchGenre() {
      try {
        let res = await handleGetGenreService();
        if (res?.success) {
          let genreData = res.data;
          let genreTypeCp = genres.map((item) => {
            return {
              ...item,
              genres:
                genreData?.length > 0 &&
                genreData.filter((genre) => genre.type === item.value),
            };
          });
          setGenres(genreTypeCp);
        }
      } catch (error) {}
    }

    fetchGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newGenres?.length > 0) {
      let newGenreType = newGenres[0].type;
      let genresCp = [...genres];
      genresCp =
        genresCp?.length > 0 &&
        genresCp.map((item) => {
          return item.value === newGenreType
            ? { ...item, genres: [...item.genres, ...newGenres] }
            : item;
        });
      setGenres(genresCp);
      setNewGenres("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newGenres]);
  useEffect(() => {
    if (deletedGenre) {
      let genresCp = [...genres];
      genresCp =
        genresCp?.length > 0 &&
        genresCp.map((item) => {
          return item.value === deletedGenre.type
            ? {
                ...item,
                genres: item?.genres?.filter(
                  (item) => item.id !== deletedGenre.id
                ),
              }
            : item;
        });
      setGenres(genresCp);
      setDeletedGenre("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedGenre]);
  return (
    <>
      <h4>List Genre</h4>
      <div className="row">
        {genres?.length > 0 &&
          genres.map((item) => {
            return (
              <div className="col-lg-6" key={item.title}>
                <h6 className="text-capitalize">{item.title}</h6>
                <GenreTab
                  genres={item.genres}
                  setDeletedGenre={setDeletedGenre}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default GenreIndex;
