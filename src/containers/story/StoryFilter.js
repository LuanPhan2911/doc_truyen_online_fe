import { useEffect, useState } from "react";
import { handleGetStoryService } from "../../services/StoryService";
import { Link, useSearchParams } from "react-router-dom";
import StoryFilterGenre from "./StoryFilterGenre";
import DropdownBase from "../../components/DropdownBase";
import Story from "./Story";
import HomeLayout from "../layouts/HomeLayout";
import "./StoryFilter.scss";
import _ from "lodash";
import { useGenresFilter } from "../../hooks";
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
const StoryFilter = () => {
  const [selectedStoryGenres, setSelectedStoryGenres] = useState([]);
  const [toggleMenuTag, setToggleMenuTag] = useState(false);
  const [storiesPaginated, setStoriesPaginated] = useState({});
  const [orderByMenu, setOrderByMenu] = useState([]);
  const [orderBy, setOrderBy] = useState("desc");

  const [qs] = useSearchParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setOrderByMenu([...menu]);
    const delaySearch = setTimeout(() => {
      fetchStories();
    }, 500);
    return () => {
      clearTimeout(delaySearch);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qs.get("name"), selectedStoryGenres]);
  async function fetchStories() {
    setLoading(true);
    let genres_id = selectedStoryGenres.map((item) => {
      return item.id;
    });
    try {
      let res = await handleGetStoryService({
        page: storiesPaginated?.currentPage || 1,
        filter: true,
        name: qs.get("name") || null,
        orderBy,
        genres_id: genres_id,
      });
      if (res?.success) {
        let { current_page: currentPage, data: stories, links } = res.data;
        links = customLink(links);
        setStoriesPaginated({
          currentPage,
          stories,
          links,
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  const customLink = (links) => {
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

  const stories = storiesPaginated?.stories || [];
  const links = storiesPaginated?.links || [];
  return (
    <HomeLayout>
      <div className="story-filter-main row">
        <div
          className={
            toggleMenuTag
              ? "story-filter-tag active"
              : "story-filter-tag col-lg-3"
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
            selectedStoryGenres={selectedStoryGenres}
            setSelectedStoryGenres={setSelectedStoryGenres}
          />
        </div>

        <div className="story-content-main col-lg-9">
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
          {qs.get("q") && (
            <div className="story-search">
              Kết quả cho tìm: <span>{qs.get("q")}</span>
            </div>
          )}
          {loading ? (
            <div className="spinner-border m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              <div className="stories-main mb-3">
                {stories?.length > 0 ? (
                  stories.map((item) => {
                    return (
                      <div className="col-lg-10" key={item.id}>
                        <Story story={item} />
                      </div>
                    );
                  })
                ) : (
                  <div className="text-danger fs-3">
                    Không tìm thấy truyện phù hợp
                  </div>
                )}
              </div>
              <ul className="pagination justify-content-center">
                {stories?.length > 0 &&
                  links?.length > 0 &&
                  links.map((item) => {
                    return (
                      <li
                        className={
                          item.url ? "page-item" : "page-item disabled"
                        }
                        key={item.label}
                      >
                        <Link
                          className={
                            item.active ? "page-link active" : "page-link"
                          }
                          // onClick={() => handleChangePage(item.page)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};
export default StoryFilter;
