// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import { handleGetGenreService } from "../../../services/GenreService";
import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../../../features/storySlice";
import { Link } from "react-router-dom";

const Genre = () => {
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
        btn: (
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Thể loại
          </button>
        ),
        body: (
          <div
            className="row d-flex align-content-around justify-content-around"
            style={{ width: "300px" }}
          >
            {genres?.length > 0 &&
              genres.map((item) => {
                return (
                  <div className="col-6" key={item.id}>
                    <li>{item.name}</li>
                  </div>
                );
              })}
          </div>
        ),
      }}
    </DropdownBase>
  );

  return GenreSearch;
};
export default Genre;
