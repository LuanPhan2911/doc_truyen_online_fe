import avatar from "../../assets/stories/150.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";
import ChapterList from "./ChapterList";
import Description from "./Description";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import "./StoryContent.scss";
import { asset } from "../../utils/Helper";
const StoryContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [story, setStory] = useState({});
  const [storyTag, setStoryTag] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    setStory({ ...location.state, chapterIndex: 1 });
    setGenres([...location.state.genres]);
  }, [location]);
  useEffect(() => {
    let cpStoryTag = [
      {
        id: 1,
        name: "Giới thiệu",
        active: true,
        component: <Description description={story.description} />,
        plug: "description",
      },
      {
        id: 2,
        name: "Đánh giá",
        active: false,
        component: null,
        count: 15,
        plug: "judge",
      },
      {
        id: 3,
        name: "DS. Chương",
        active: false,
        component: <ChapterList />,
        count: 120,
        plug: "chapter-list",
      },
      {
        id: 4,
        name: "Bình luận",
        active: false,
        component: <Comments />,
        count: 1200,
        plug: "comment",
      },
      {
        id: 5,
        name: "Hâm mộ",
        active: false,
        component: null,
        plug: "favorite",
      },
    ];
    setStoryTag([...cpStoryTag]);
  }, [story]);

  const handleShowChapter = ({ id: storyId, chapterIndex }) => {
    navigate(`chapter/${chapterIndex}`, {
      state: { storyId, chapterIndex },
    });
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
    <div className="container content">
      <div className="story-detail">
        <div className="story-detail-image">
          <img src={asset(story?.avatar)} alt="Not found" />
        </div>
        <div className="story-detail-info">
          <div className="story-detail-title">{story?.name}</div>
          <ul className="story-detail-genre">
            {genres?.length > 0 &&
              genres.map((item) => {
                return <li>{item.name}</li>;
              })}
          </ul>
          <ul className="story-detail-full">
            <li>
              1372
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
            4.62/5
            <span>(24 lượt đánh giá)</span>
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
                  {item?.count ? (
                    <span className="count">{item.count}</span>
                  ) : (
                    <></>
                  )}
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
