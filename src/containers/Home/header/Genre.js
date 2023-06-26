// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import { handleGetGenreService } from "../../../services/GenreService";
import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../../../features/storySlice";
import "./Genre.scss";
const Genre = ({ btn }) => {
  const genres = useSelector((state) => state.story.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    if (genres?.length === 0) {
      getGenre({ type: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getGenre(query) {
    try {
      let res = await handleGetGenreService(query);
      if (res && res?.success) {
        let data = res.data;
        let obj = {
          id: 0,
          name: "Tất cả",
        };
        data.unshift(obj);
        dispatch(setGenres(data));
      }
    } catch (error) {}
  }
  const GenreSearch = (
    <DropdownBase>
      {{
        btn: <span className="btn-dropdown">{btn}</span>,
        body: (
          <ul className="genre-list">
            {genres?.length > 0 &&
              genres.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
          </ul>
        ),
      }}
    </DropdownBase>
  );

  return GenreSearch;
};
export default Genre;
