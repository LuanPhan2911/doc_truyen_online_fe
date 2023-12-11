import _ from "lodash";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetGenreService } from "../services/GenreService";
import { setGenresFilter } from "../features/storySlice";

const useGenresFilter = () => {
  const GENRE_TYPE = [
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
  const genresFilter = useSelector((state) => state.story.genresFilter);
  const [genres, setGenres] = useState([]);
  const [hasData, setHasData] = useState(false);
  useLayoutEffect(() => {
    if (_.isEmpty(genresFilter)) {
      async function fetchGenre() {
        let res = await handleGetGenreService();
        if (res?.success) {
          dispatch(setGenresFilter(res.data));
        }
      }
      fetchGenre();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useLayoutEffect(() => {
    if (!_.isEmpty(genresFilter)) {
      let genresCp = [];
      genresCp = GENRE_TYPE.map((item) => {
        return {
          ...item,
          genres: genresFilter.filter((genre) => genre.type === item.value),
        };
      });
      setGenres(genresCp);
      setHasData(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genresFilter]);

  return [genres, setGenres, GENRE_TYPE, hasData];
};
export default useGenresFilter;
