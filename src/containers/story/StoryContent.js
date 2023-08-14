import { AiFillStar } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";

import Description from "./Description";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import "./StoryContent.scss";
import { asset } from "../../utils/Helper";
import ChapterList from "../chapter/ChapterList";
import { handleShowStoryService } from "../../services/StoryService";

const StoryContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [story, setStory] = useState({});
  const [storyTag, setStoryTag] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    let { storyId, index } = location.state;
    async function fetchStory() {
      try {
        let res = await handleShowStoryService(storyId);
        if (res?.success) {
          let { genres, ...other } = res.data;
          setStory({ ...other, chapterIndex: index });
          setGenres([...genres]);
          let cpStoryTag = [
            {
              id: 1,
              name: "Giới thiệu",
              active: true,
              component: <Description description={other.description} />,
              plug: "description",
            },
            {
              id: 2,
              name: "DS. Chương",
              active: false,
              component: <ChapterList storyId={storyId} />,
              count: story.chapters_count,
              plug: "chapter-list",
            },
            {
              id: 3,
              name: "Bình luận",
              active: false,
              component: <Comments storyId={storyId} />,
              count: story.comments_count,
              plug: "comment",
            },
          ];
          setStoryTag([...cpStoryTag]);
        }
      } catch (error) {}
    }
    fetchStory();
  }, [location.state]);

  const handleShowChapter = ({ chapterIndex }) => {
    navigate(`chapter/${chapterIndex}`, {});
  };
  const handleChangeStoryTag = (tagId) => {
    let cpStoryTag = storyTag;
    cpStoryTag?.length > 0 &&
      cpStoryTag.forEach((item) => {
        if (item.id === tagId) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
    setStoryTag([...cpStoryTag]);
  };
  return (
    <div className="container story-detail-main">
      <div className="story-detail">
        <div className="story-detail-image">
          <img src={story?.avatar && asset(story?.avatar)} alt="Not found" />
        </div>
        <div className="story-detail-info">
          <div className="story-detail-title">{story?.name}</div>
          <ul className="story-detail-genre">
            {genres?.length > 0 &&
              genres.map((item) => {
                return <li key={item.name}>{item.name}</li>;
              })}
          </ul>
          <ul className="story-detail-full">
            <li>
              {story?.chapters_count}
              <span>Chương</span>
            </li>
            <li>
              11
              <span>Chương/Tuần</span>
            </li>
            <li>
              95.5k
              <span>Lượt đọc</span>
            </li>
            <li>
              1000
              <span>Cất trữ</span>
            </li>
          </ul>
          <div className="story-detail-rate">
            <div className="star">
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
            </div>
            <div className="rate">
              4.62/5
              <span>(24 lượt đánh giá)</span>
            </div>
          </div>
          <ul className="story-detail-action">
            <li
              className="story-detail-read"
              onClick={() => handleShowChapter(story)}
            >
              <FaGlasses color="white" size={"1.2em"} />
              <span>Đọc truyện</span>
            </li>
            <li className="story-detail-mark">
              <BsBookmark color="#333" size={"1.2em"} />
              <span>Đánh dấu</span>
            </li>
            <li className="story-detail-suggest">
              <GiCottonFlower />
              <span>Đề cử</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="story-detail-tag">
        <ul>
          {storyTag?.length > 0 &&
            storyTag.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.active ? "active" : ""}
                  onClick={() => handleChangeStoryTag(item.id)}
                >
                  {item.name}
                  <span className="count">{item.count}</span>
                </li>
              );
            })}
        </ul>

        <div className="tag-content">
          {
            (
              storyTag?.length > 0 &&
              storyTag.find((item) => {
                return item.active === true;
              })
            )?.component
          }
        </div>
      </div>
    </div>
  );
};
export default StoryContent;
