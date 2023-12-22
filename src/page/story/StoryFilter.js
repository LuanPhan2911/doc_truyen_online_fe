/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { handleGetStoryService } from "../../services/StoryService";
import { useSearchParams } from "react-router-dom";
import StoryFilterGenre from "../../containers/story/StoryFilterGenre";
import DropdownBase from "../../components/DropdownBase";
import Story from "../../containers/story/Story";
import HomeLayout from "../../containers/layouts/HomeLayout";
import "./StoryFilter.scss";
import PaginateLink from "../../components/PaginateLink";
import { useSelector } from "react-redux";
const StoryFilter = () => {
  const [selectedStoryGenres, setSelectedStoryGenres] = useState([]);
  const [toggleMenuTag, setToggleMenuTag] = useState(false);
  const [storiesPaginated, setStoriesPaginated] = useState({});
  const [qs, setQs] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const { views } = useSelector((state) => state.story);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchStories();
    }, 500);
    return () => {
      clearTimeout(delaySearch);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    qs.get("view"),
    qs.get("page"),
    qs.get("name"),
    selectedStoryGenres,
    qs.get("orderBy"),
  ]);
  async function fetchStories() {
    setLoading(true);
    let genres_id = selectedStoryGenres.map((item) => {
      return item.id;
    });
    try {
      let res = await handleGetStoryService({
        view: qs.get("view") || null,
        page: qs.get("page") || 1,
        filter: true,
        name: qs.get("name") || null,
        orderBy: qs.get("orderBy") || "desc",
        genres_id: genres_id,
      });
      if (res?.success) {
        setStoriesPaginated(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const stories = storiesPaginated?.data || [];
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
                      className={`w-100 dropdown-item ${
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
                      className={`w-100 dropdown-item ${
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
              <li>
                <DropdownBase>
                  <DropdownBase.Button>
                    <button className="btn-dropdown dropdown-toggle">
                      Góc nhìn
                    </button>
                  </DropdownBase.Button>
                  <DropdownBase.Body>
                    {views?.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className={`w-100 dropdown-item ${
                            +qs.get("view") === item.id && "active"
                          }`}
                          onClick={() => {
                            setQs((prev) => {
                              prev.set("view", item.id);
                              return prev;
                            });
                          }}
                        >
                          {item.view}
                        </li>
                      );
                    })}
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
              {stories?.length > 0 && (
                <PaginateLink
                  totalCount={storiesPaginated?.total}
                  currentPage={storiesPaginated?.current_page}
                  pageSize={storiesPaginated?.per_page}
                  siblingCount={1}
                />
              )}
            </>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};
export default StoryFilter;
