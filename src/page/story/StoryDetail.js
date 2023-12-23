import { Link, useNavigate, useParams } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";
import Comments from "../../containers/comments/Comments";
import { useEffect, useState } from "react";
import "./StoryDetail.scss";
import { asset } from "../../utils/Helper";
import ChapterList from "../../containers/chapter/ChapterList";
import { getStory } from "../../services/StoryService";
import HomeLayout from "../../containers/layouts/HomeLayout";
import StoryDescription from "../../containers/story/StoryDescription";
import { useSelector } from "react-redux";
import _ from "lodash";
import StoryRating from "../../containers/story/StoryRating";
import StarRatings from "react-star-ratings";
import NavTab from "../../components/NavTab";
import { postStoryMarking } from "../../services/UserServices";
import { toast } from "react-toastify";

const StoryDetail = () => {
  const navigate = useNavigate();
  const [story, setStory] = useState({});
  const [storyTag, setStoryTag] = useState([]);
  const { slug } = useParams();
  const borderColor = useSelector((state) => state.app.borderColor);
  const [rateStory, setRateStory] = useState(0);
  const { views } = useSelector((state) => state.story);
  const [viewStory, setViewStory] = useState({});
  useEffect(() => {
    async function fetchStory() {
      try {
        let res = await getStory(slug);
        if (res?.success) {
          let storyCp = res.data;
          setStory({ ...storyCp });
          let rateStoryCp = getRateStory(storyCp?.rate_story);
          setRateStory(rateStoryCp);
          let viewStoryCp = getView(storyCp?.view);
          setViewStory(viewStoryCp);
          let cpStoryTag = getStoryTag(storyCp);
          setStoryTag([...cpStoryTag]);
        }
      } catch (error) {}
    }
    fetchStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getStoryTag = (story) => {
    return [
      {
        id: 1,
        name: "Giới thiệu",
        active: true,
        component: (
          <StoryDescription
            description={story?.description}
            reactionSummary={story?.reaction_summary}
            newestChapter={story?.newest_chapter}
          />
        ),
      },
      {
        id: 2,
        name: "DS. Chương",
        active: false,
        component: <ChapterList storyId={story?.id} />,
        count: story?.chapters_count,
      },
      {
        id: 3,
        name: "Đánh giá",
        active: false,
        component: <StoryRating storyId={story?.id} />,
        count: story?.rate_comments_count,
      },
      {
        id: 4,
        name: "Bình luận",
        active: false,
        component: <Comments storyId={story?.id} type={0} />,
        count: story?.comments_count,
      },
    ];
  };
  const getView = (viewId) => {
    return views.find((item) => item.id === viewId) || {};
  };
  const getRateStory = (rateStory) => {
    let rateValue = Object.values(rateStory);
    return _.mean(rateValue);
  };
  const handleShowChapter = ({ chapter_index: chapterIndex }) => {
    navigate(`chapter/${chapterIndex || 1}`);
  };
  const handleMarkStory = async ({ slug, chapter_index }) => {
    try {
      toast.promise(
        postStoryMarking({
          slug,
          index: chapter_index || 1,
        }),
        {
          pending: "Đang đánh dấu truyện",
          success: "Đánh dấu thành công 👌",
          error: "Có lỗi xảy ra🤯",
        }
      );
    } catch (error) {}
  };
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
              <li className={`border ${_.sample(borderColor)} rounded-pill`}>
                <Link
                  className="text-decoration-none"
                  to={`/author/${story?.author?.slug}`}
                >
                  {story?.author?.name}
                </Link>
              </li>
              {story?.genres?.length > 0 &&
                story?.genres.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`border ${_.sample(borderColor)} rounded-pill`}
                    >
                      <Link
                        to={`/story/?genres=${item.slug}`}
                        className="text-decoration-none"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              <li className={`border ${_.sample(borderColor)} rounded-pill`}>
                <Link
                  className="text-decoration-none"
                  to={`/story?view=${viewStory?.id}`}
                >
                  {viewStory?.view}
                </Link>
              </li>
            </ul>
            <ul className="story-detail-full">
              <li>
                {story?.chapters_count}
                <span className="fs-small">Chương</span>
              </li>
              <li>
                11
                <span className="fs-small">Chương/Tuần</span>
              </li>
              <li>
                95.5k
                <span className="fs-small">Lượt đọc</span>
              </li>
              <li>
                1000
                <span className="fs-small">Cất trữ</span>
              </li>
            </ul>
            <div className="story-detail-rate">
              <div className="star">
                <StarRatings
                  rating={rateStory || 0}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  name="rating"
                  starDimension="16px"
                  starSpacing="2px"
                />
              </div>
              <div className="rate">
                {rateStory || 0}/5
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
              <li
                className="story-detail-mark"
                onClick={() => handleMarkStory(story)}
              >
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
        <NavTab navTab={storyTag} setNavTab={setStoryTag} />
      </div>
    </HomeLayout>
  );
};
export default StoryDetail;
