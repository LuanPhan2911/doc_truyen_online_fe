import { useEffect, useState } from "react";
import Stories from "./Stories";
import "./StoryFilter.scss";
import { handleGetGenreService } from "../../services/GenreService";

const StoryFilter = () => {
  const [storyTag, setStoryTag] = useState({});
  const [selectedStoryTag, setSelectedStoryTag] = useState([]);
  const [toggleMenuTag, setToggleMenuTag] = useState(false);
  useEffect(() => {
    async function fetch() {
      let res = await handleGetGenreService();
      if (res?.success) {
        let data = computeData(res.data);
        setStoryTag({ ...data });
      }
    }
    fetch();
  }, []);
  const computeData = (data) => {
    let obj = {};
    obj["CATEGORY"] = [];
    obj["CHARACTER"] = [];
    obj["WORLD"] = [];
    obj["TAG"] = [];
    data?.length > 0 &&
      data.forEach((item) => {
        item.selected = false;
        switch (item.type) {
          case 1:
            item.key = "CATEGORY";
            obj["CATEGORY"].push(item);
            break;
          case 2:
            item.key = "CHARACTER";
            obj["CHARACTER"].push(item);
            break;
          case 3:
            item.key = "WORLD";
            obj["WORLD"].push(item);
            break;
          case 4:
            item.key = "TAG";
            obj["TAG"].push(item);
            break;
          default:
            break;
        }
      });
    return obj;
  };
  let handleSetSelectedTag = (tag) => {
    let cpStoryTag = storyTag;
    let arr = cpStoryTag[tag.key];
    if (arr?.length > 0) {
      arr.forEach((item) => {
        if (item.id === tag.id) {
          item.selected = true;
        }
      });
    }
    cpStoryTag[tag.key] = arr;
    console.log(cpStoryTag);
    setStoryTag({ ...cpStoryTag });
  };

  const handleSelectGenre = (tag) => {
    handleSetSelectedTag(tag);
    let arr = [...selectedStoryTag, tag];
    if (arr?.length > 0) {
      arr = arr.filter((item, index) => {
        return (
          index ===
          arr.findIndex((e) => {
            return e.id === item.id;
          })
        );
      });
    }
    setSelectedStoryTag([...arr]);
  };
  let handleRemoveSelectedTag = (tag) => {
    let cpStoryTag = storyTag;
    let arr = cpStoryTag[tag.key];
    if (arr?.length > 0) {
      arr.forEach((item) => {
        if (item.id === tag.id) {
          item.selected = false;
        }
      });
    }
    cpStoryTag[tag.key] = arr;

    setStoryTag({ ...cpStoryTag });
  };
  const handleRemoveGenre = (tag) => {
    handleRemoveSelectedTag(tag);
    let arr = [...selectedStoryTag];
    if (arr?.length > 0) {
      arr = arr.filter((item) => {
        return item.id !== tag.id;
      });
    }
    setSelectedStoryTag([...arr]);
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
            class="bi bi-x-circle-fill"
            onClick={() => setToggleMenuTag(false)}
          ></i>
        </div>
        <div className="selected-genre">
          <div className="tag-title">Đã chọn</div>
          <div className="tag-wrapper">
            {selectedStoryTag?.length > 0 &&
              selectedStoryTag.map((item) => {
                return (
                  <span
                    key={item.id}
                    className="selected-tag"
                    onClick={() => handleRemoveGenre(item)}
                  >
                    {item.name}
                    <i className="bi bi-x-lg"></i>
                  </span>
                );
              })}
          </div>
        </div>
        <div className="story-category">
          <div className="tag-title">Thể loại</div>
          <div className="tag-wrapper">
            {storyTag["CATEGORY"]?.length > 0 &&
              storyTag["CATEGORY"].map((item) => {
                return (
                  <span
                    key={item.id}
                    onClick={() => handleSelectGenre(item)}
                    className={item.selected ? "selected-tag" : ""}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
        </div>
        <div className="story-character">
          <div className="tag-title">Tính cách nhân vật</div>
          <div className="tag-wrapper">
            {storyTag["CHARACTER"]?.length > 0 &&
              storyTag["CHARACTER"].map((item) => {
                return (
                  <span
                    key={item.id}
                    onClick={() => handleSelectGenre(item)}
                    className={item.selected ? "selected-tag" : ""}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
        </div>
        <div className="story-world">
          <div className="tag-title">Bối cảnh thế giới</div>
          <div className="tag-wrapper">
            {storyTag["WORLD"]?.length > 0 &&
              storyTag["WORLD"].map((item) => {
                return (
                  <span
                    key={item.id}
                    onClick={() => handleSelectGenre(item)}
                    className={item.selected ? "selected-tag" : ""}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
        </div>
        <div className="story-tag">
          <div className="tag-title">Lưu phái</div>
          <div className="tag-wrapper">
            {storyTag["TAG"]?.length > 0 &&
              storyTag["TAG"].map((item) => {
                return (
                  <span
                    key={item.id}
                    onClick={() => handleSelectGenre(item)}
                    className={item.selected ? "selected-tag" : ""}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
        </div>
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
        <Stories />
      </div>
    </div>
  );
};
export default StoryFilter;
