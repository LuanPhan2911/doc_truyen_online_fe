import { useEffect, useState } from "react";
import Stories from "./Stories";
import "./StoryFilter.scss";
import { handleGetGenreService } from "../../services/GenreService";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "../../features/storySlice";
import { handleGetStoryService } from "../../services/StoryService";
import { Link } from "react-router-dom";
import { getQueryParams } from "../../utils/Helper";
import { useQueryString } from "../../hooks";
import StoryFilterGenre from "./StoryFilterGenre";
const StoryFilter = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.story.tags);
  const [selectedStoryTag, setSelectedStoryTag] = useState([]);
  const [toggleMenuTag, setToggleMenuTag] = useState(false);
  const [stories, setStories] = useState([]);
  const [links, setLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [storiesPaginated, setStoriesPaginated] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const params = useQueryString();
  useEffect(() => {
    async function fetchGenre() {
      if (tags?.length === 0) {
        let res = await handleGetGenreService();
        if (res?.success) {
          dispatch(setTags(res.data));
        }
      }
    }
    fetchGenre();
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
    let q = params.q || "";

    setSearchValue(q);
    fetchStories({
      page: currentPage || 1,
      filter: true,
      genres_id,
      name: q,
    });
  }, [selectedStoryTag, currentPage, params.q]);
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
          tags={tags}
          searchValue={searchValue}
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
            <li>Mới cập nhật</li>
            <li>Lượt đọc</li>
            <li>Điểm đánh giá</li>
            <li>Cất giữ</li>
            <li>Yêu thích</li>
            <li>Đề cử</li>
            <li>Bình luận</li>
            <li>Số chương</li>
          </ul>
        </div>
        {searchValue && (
          <div className="story-search">
            Kết quả cho tìm: <span>{searchValue}</span>
          </div>
        )}
        <Stories stories={stories} />
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
