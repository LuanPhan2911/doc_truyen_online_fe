// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
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
    <DropdownBase bodyWidth="400px">
      {{
        btn: (
          <button className="btn btn-dropdown">
            <i className="bi bi-list" style={{ fontSize: "1.2em" }}></i>
            <span className="px-2">Thể loại</span>
          </button>
        ),
        body: (
          <ul className="list-unstyled row">
            {genres?.length > 0 &&
              genres.map((item) => {
                return (
                  <li className="col-lg-6 col-sm-12 text-center" key={item.id}>
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
