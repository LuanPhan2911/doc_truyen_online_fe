import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import "./Category.scss";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useGenresFilter } from "../../../hooks";
import _ from "lodash";
const Category = ({ btn }) => {
  const [genres] = useGenresFilter();
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (!_.isEmpty(genres)) {
      let genresCp = [...genres];
      let categoryCp = genresCp[0];
      let all = {
        id: "",
        name: "Tất cả",
        type: 1,
        slug: "",
      };
      categoryCp = {
        ...categoryCp,
        genres: [all, ...categoryCp.genres],
      };
      setCategory(categoryCp);
    }
  }, [genres]);
  const navigate = useNavigate();
  const handleFilterStoryGenre = (genre) => {
    navigate("/story", {
      state: genre,
    });
  };

  return (
    <DropdownBase>
      {{
        btn: <span className="btn-dropdown">{btn}</span>,
        body: (
          <ul className="genre-list">
            {category?.genres?.length > 0 &&
              category?.genres?.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => handleFilterStoryGenre(item)}
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
};
export default Category;
