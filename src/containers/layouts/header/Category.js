import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import "./Category.scss";
import { Link, createSearchParams } from "react-router-dom";
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
  return (
    <DropdownBase>
      <DropdownBase.Button>
        {" "}
        <i className="bi bi-border-all"></i>
        <button className="btn-dropdown dropdown-toggle">Thể loại</button>
      </DropdownBase.Button>
      <DropdownBase.Body>
        <ul className="genre-list row">
          {category?.genres?.length > 0 &&
            category?.genres?.map((item) => {
              return (
                <li key={item.id} className="col-lg-6">
                  <Link
                    to={`/story?${createSearchParams({
                      genres: item.slug || [],
                    }).toString()}`}
                    className="text-decoration-none"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </DropdownBase.Body>
    </DropdownBase>
  );
};
export default Category;
