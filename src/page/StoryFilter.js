import { useEffect, useState } from "react";
import { handleGetStoryService } from "../services/StoryService";
import { Link, useParams, useSearchParams } from "react-router-dom";
import StoryFilterGenre from "../containers/story/StoryFilterGenre";
import DropdownBase from "../components/DropdownBase";
import Story from "../containers/story/Story";
import HomeLayout from "../containers/layouts/HomeLayout";
import "./StoryFilter.scss";
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
  const [storiesPaginated, setStoriesPaginated] = useState({
    currentPage: "",
    stories: [],
    links: [],
    totals: "",
  });
  const [qs, setQs] = useSearchParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchStories();
    }, 500);
    return () => {
      clearTimeout(delaySearch);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qs.get("name"), selectedStoryGenres, qs.get("orderBy")]);
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
        orderBy: qs.get("orderBy") || "desc",
        genres_id: genres_id,
      });
      if (res?.success) {
        let {
          current_page: currentPage,
          data: stories,
          links,
          totals,
        } = res.data;
        links = customLink(links);
        setStoriesPaginated({
          currentPage,
          stories,
          links,
          totals,
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

  const stories = storiesPaginated?.stories || [];
  const links = storiesPaginated?.links || [];
  const totals = storiesPaginated?.totals;
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
                <DropdownBase>
                  <DropdownBase.Button>
                    <button className="btn-dropdown dropdown-toggle">
                      Sắp xếp
                    </button>
                  </DropdownBase.Button>
                  <DropdownBase.Body>
                    <li
                      className={`text-center w-100 dropdown-item ${
                        qs.get("orderBy") === "desc" && "active"
                      }`}
                      onClick={() => {
                        setQs((prev) => {
                          prev.set("orderBy", "desc");
                          return prev;
                        });
                      }}
                    >
                      Mới nhất
                    </li>
                    <li
                      className={`text-center w-100 dropdown-item ${
                        qs.get("orderBy") === "asc" && "active"
                      }`}
                      onClick={() => {
                        setQs((prev) => {
                          prev.set("orderBy", "asc");
                          return prev;
                        });
                      }}
                    >
                      Củ nhất
                    </li>
                  </DropdownBase.Body>
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
              <div className="stories-main row">
                {stories?.length > 0 ? (
                  stories.map((item) => {
                    return (
                      <div className="col-lg-6" key={item.id}>
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
              {totals > 1 && (
                <ul className="pagination justify-content-center mt-3">
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
              )}
            </>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};
export default StoryFilter;
