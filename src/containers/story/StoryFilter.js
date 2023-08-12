import { useEffect, useState } from "react";

import "./StoryFilter.scss";

import { handleGetStoryService } from "../../services/StoryService";
import { Link } from "react-router-dom";
import { getQueryParams } from "../../utils/Helper";
import { usePaginate, useQueryString } from "../../hooks";
import StoryFilterGenre from "./StoryFilterGenre";
import DropdownBase from "../../components/DropdownBase";
import Story from "./Story";

const StoryFilter = () => {
  const [selectedStoryTag, setSelectedStoryTag] = useState([]);
  const [toggleMenuTag, setToggleMenuTag] = useState(false);
  const [stories, setStories] = useState([]);
  const [links, setLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [storiesPaginated, setStoriesPaginated] = useState("");

  const [orderByMenu, setOrderByMenu] = useState([]);
  const [orderBy, setOrderBy] = useState("desc");
  const { q } = useQueryString();

  useEffect(() => {
    function initOrderByMenu() {
      const menu = [
        {
          id: 1,
          name: "Mới nhất",
          value: "desc",
          active: true,
        },
        {
          id: 2,
          name: "Củ nhất",
          value: "asc",
          active: false,
        },
      ];
      setOrderByMenu([...menu]);
    }
    initOrderByMenu();
  }, []);

  useEffect(() => {
    if (storiesPaginated) {
      let { data, links } = storiesPaginated;
      setStories([...data]);
      computedLink(links);
      setLinks([...links]);
    }
  }, [storiesPaginated]);
  useEffect(() => {
    let genres_id = selectedStoryTag.map((item) => {
      return item.id;
    });

    fetchStories({
      page: currentPage || 1,
      filter: true,
      name: q,
      genres_id,
      orderBy,
    });
  }, [currentPage]);
  useEffect(() => {
    let genres_id = selectedStoryTag.map((item) => {
      return item.id;
    });
    fetchStories({
      filter: true,
      name: q,
      genres_id,
      orderBy,
    });
  }, [selectedStoryTag, q, orderBy]);

  async function fetchStories(qs) {
    let res = await handleGetStoryService({
      ...qs,
    });
    if (res?.success) {
      setStoriesPaginated({ ...res.data });
    }
  }
  const computedLink = (links) => {
    links.forEach((item) => {
      if (item.url) {
        let params = getQueryParams(item.url);
        item.page = params.page;
      } else {
        item.page = null;
      }
    });
    links[0].label = "Trước";
    links[links.length - 1].label = "Sau";
    return links;
  };
  const handleSetOrderByStory = (id) => {
    let cpOrderByMenu = [...orderByMenu];
    cpOrderByMenu?.length > 0 &&
      cpOrderByMenu.forEach((item) => {
        if (item.id === id) {
          item.active = true;
          setOrderBy(item.value);
        } else {
          item.active = false;
        }
      });
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="story-filter-main">
      <div
        className={
          toggleMenuTag ? "story-filter-tag active" : "story-filter-tag"
        }
      >
        <div className="close-filter-story-tag">
          <h3 className="title">Bộ lọc</h3>
          <i
            className="bi bi-x-circle-fill"
            onClick={() => setToggleMenuTag(false)}
          ></i>
        </div>
        <StoryFilterGenre
          selectedStoryTag={selectedStoryTag}
          setSelectedStoryTag={setSelectedStoryTag}
        />
      </div>

      <div className="story-content-main">
        <div className="story-filter-nav">
          <div className="toggle-tag" onClick={() => setToggleMenuTag(true)}>
            <i className="bi bi-list-ul"></i>
          </div>
          <ul className="story-filter-atr">
            <li>
              <DropdownBase minWidth="150px">
                {{
                  btn: <span className="btn-dropdown">Sắp xếp</span>,
                  body:
                    orderByMenu?.length > 0 &&
                    orderByMenu.map((item) => {
                      return (
                        <li className="w-100" key={item.id}>
                          <Link
                            className={
                              item.active
                                ? "dropdown-item active"
                                : "dropdown-item"
                            }
                            onClick={() => handleSetOrderByStory(item.id)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    }),
                }}
              </DropdownBase>
            </li>
            <li>Lượt đọc</li>
            <li>Điểm đánh giá</li>
            <li>Bình luận</li>
            <li>Số chương</li>
          </ul>
        </div>
        {q && (
          <div className="story-search">
            Kết quả cho tìm: <span>{q}</span>
          </div>
        )}
        <div className="stories-main">
          {stories &&
            stories.length > 0 &&
            stories.map((item, index) => {
              return <Story key={index} story={item} />;
            })}
        </div>
        <ul className="pagination justify-content-center">
          {stories?.length > 0 &&
            links?.length > 0 &&
            links.map((item) => {
              return (
                <li
                  className={item.url ? "page-item" : "page-item disabled"}
                  key={item.label}
                >
                  <Link
                    className={item.active ? "page-link active" : "page-link"}
                    onClick={() => handleChangePage(item.page)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default StoryFilter;
