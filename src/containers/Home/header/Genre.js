// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Dropdowns from "../../../components/Dropdowns";
import { useFetch } from "../../../hooks/useFetch";
import { handleGetGenreService } from "../../../services/GenreService";
import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../../../features/storySlice";

const Genre = () => {
  const genres = useSelector((state) => state.story.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    if (genres?.length === 0) {
      getGenre({ type: 1 });
    }
  }, []);
  async function getGenre(query) {
    try {
      let res = await handleGetGenreService(query);
      if (res && res?.success) {
        let data = res.data;
        dispatch(setGenres(data));
      }
    } catch (error) {}
  }

  return <Dropdowns title={"The loai"} options={genres} />;
};
export default Genre;
