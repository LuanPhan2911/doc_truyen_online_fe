import { useEffect, useState } from "react";
import "./StoryFilterGenre.scss";
import { useQueryString } from "../../hooks";
const StoryFilterGenre = ({
  searchValue,
  selectedStoryTag,
  setSelectedStoryTag,
  tags,
}) => {
  const [storyTag, setStoryTag] = useState({});
  const params = useQueryString();
  useEffect(() => {
    if (tags.length > 0) {
      let data = computeData(tags);
      setStoryTag({ ...data });
    }
  }, []);
  useEffect(() => {
    handleSetGenreFromUrl(params.genre);
  }, [params.genre]);
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
  const handleSetSelectedTag = (tag) => {
    let cpStoryTag = { ...storyTag };
    let arr = cpStoryTag[tag.key];
    if (arr?.length > 0) {
      arr.forEach((item) => {
        if (item.id === tag.id) {
          item.selected = true;
        }
      });
    }
    cpStoryTag[tag.key] = arr;
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
  const handleSetGenreFromUrl = (genreId) => {
    let cpStoryTag = { ...storyTag };
    let genres = cpStoryTag["CATEGORY"];
    if (!genreId) {
      setSelectedStoryTag([]);
      genres?.length > 0 && genres.forEach((item) => (item.selected = false));
    }
    let tag = genres?.length > 0 && genres.find((item) => item.id === +genreId);
    if (tag) {
      let arr = cpStoryTag[tag.key];
      arr.forEach((item) => {
        if (item.id === tag.id) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      cpStoryTag[tag.key] = arr;
      setStoryTag({ ...cpStoryTag });
      setSelectedStoryTag([tag]);
    }
  };
  return (
    <>
      <div className="selected-genre">
        <div className="tag-title">Đã chọn</div>
        <div className="tag-wrapper">
          {searchValue && (
            <span className="search-value">Đang tìm: {searchValue}</span>
          )}
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
        <div className="tag-title">Chủ đề</div>
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
    </>
  );
};
export default StoryFilterGenre;
