import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import { handleGetGenreService } from "../../../services/GenreService";
import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../../../features/storySlice";
import "./Genre.scss";
import { useNavigate } from "react-router-dom";
const Genre = ({ btn }) => {
  const genres = useSelector((state) => state.story.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          id: "",
          name: "Tất cả",
        };
        data.unshift(obj);
        dispatch(setGenres(data));
      }
    } catch (error) {}
  }
  const handleFilterStoryGenre = (genreId) => {
    navigate({
      pathname: "/story",
      search: `?genre=${genreId}`,
    });
  };
  const GenreSearch = (
    <DropdownBase>
      {{
        btn: <span className="btn-dropdown">{btn}</span>,
        body: (
          <ul className="genre-list">
            {genres?.length > 0 &&
              genres.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => handleFilterStoryGenre(item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
          </ul>
        ),
      }}
    </DropdownBase>
  );

  return GenreSearch;
};
export default Genre;
