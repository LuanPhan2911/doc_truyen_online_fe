import { useNavigate, useParams } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";
import Comments from "../containers/comments/Comments";
import { useEffect, useState } from "react";
import "./StoryDetail.scss";
import { asset } from "../utils/Helper";
import ChapterList from "../containers/chapter/ChapterList";
import { handleShowStoryService } from "../services/StoryService";
import HomeLayout from "../containers/layouts/HomeLayout";
import StoryDescription from "../containers/story/StoryDescription";
import { useSelector } from "react-redux";
import _ from "lodash";
import StoryRating from "../containers/story/StoryRating";
import StarRatings from "react-star-ratings";

const StoryDetail = () => {
  const navigate = useNavigate();
  const [story, setStory] = useState({});
  const [storyTag, setStoryTag] = useState([]);
  const [genres, setGenres] = useState([]);
  const { slug } = useParams();
  const borderColor = useSelector((state) => state.app.borderColor);
  const [rateStory, setRateStory] = useState(0);
  useEffect(() => {
    async function fetchStory() {
      try {
        let res = await handleShowStoryService(slug);
        if (res?.success) {
          let storyCp = res.data;
          let { genres } = storyCp;
          setStory({ ...storyCp });
          setGenres([...genres]);
          setRateStory(storyCp?.rate_story);
          let cpStoryTag = [
            {
              id: 1,
              name: "Giới thiệu",
              active: true,
              component: (
                <StoryDescription
                  description={storyCp?.description}
                  reactionSummary={storyCp?.reaction_summary}
                  newestChapter={storyCp?.newest_chapter}
                />
              ),
            },
            {
              id: 2,
              name: "DS. Chương",
              active: false,
              component: <ChapterList storyId={storyCp?.id} />,
              count: storyCp?.chapters_count,
            },
            {
              id: 3,
              name: "Đánh giá",
              active: false,
              component: <StoryRating storyId={storyCp?.id} />,
              count: storyCp?.rate_comments_count,
            },
            {
              id: 4,
              name: "Bình luận",
              active: false,
              component: <Comments storyId={storyCp?.id} type={0} />,
              count: storyCp?.comments_count,
            },
          ];
          setStoryTag([...cpStoryTag]);
        }
      } catch (error) {}
    }
    fetchStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleShowChapter = ({ chapter_index: chapterIndex }) => {
    navigate(`chapter/${chapterIndex || 1}`);
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
  let rateValue = [];
  if (rateStory) {
    rateValue = Object.values(rateStory);
  }
  return (
    <HomeLayout>
      <div className="container story-detail-main p-3 rounded">
        <div className="story-detail row">
          <div className="story-detail-image col-lg-4">
            <img
              src={story?.avatar && asset(story?.avatar)}
              alt="Not found"
              className="img-fluid w-100"
            />
          </div>
          <div className="story-detail-info col-lg-8">
            <div className="story-detail-title">{story?.name}</div>
            <ul className="story-detail-genre">
              {genres?.length > 0 &&
                genres.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`border ${_.sample(borderColor)} `}
                    >
                      {item.name}
                    </li>
                  );
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
                <StarRatings
                  rating={_.mean(rateValue) || 0}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  name="rating"
                  starDimension="16px"
                  starSpacing="2px"
                />
              </div>
              <div className="rate">
                {_.mean(rateValue) || 0}/5
                <span className="fs-small">
                  ({story?.rate_comments_count} lượt đánh giá)
                </span>
              </div>
            </div>
            <ul className="story-detail-action">
              <li
                className={`story-detail-read ${
                  story?.chapter_index && "active"
                }`}
                onClick={() => handleShowChapter(story)}
              >
                <FaGlasses color="white" size={"1.2em"} />
                {story?.chapter_index ? (
                  <span>Đọc tiếp</span>
                ) : (
                  <span>Đọc truyện</span>
                )}
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
          <ul className="tag-ul">
            {storyTag?.length > 0 &&
              storyTag.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={item.active ? "active" : ""}
                    onClick={() => handleChangeStoryTag(item.id)}
                  >
                    {item.name}
                    <span className="count">{item?.count}</span>
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
    </HomeLayout>
  );
};
export default StoryDetail;
