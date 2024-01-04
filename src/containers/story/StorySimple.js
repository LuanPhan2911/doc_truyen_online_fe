import { Link, useNavigate } from "react-router-dom";
import { asset } from "../../utils/Helper";
import { useSelector } from "react-redux";
import "./StorySimple.scss";

const StorySimple = ({
  story,
  handleNotifyStory,
  handleDestroyStory,
  loading,
  isMarked,
}) => {
  const navigate = useNavigate(0);
  const { isAuth } = useSelector((state) => state.auth);
  const handleShowStoryDetail = (story) => {
    navigate(`story/${story?.slug}`);
  };

  return (
    <div
      className="row story-reading col-md-8 col-lg-12 border-bottom my-2"
      key={story.id}
    >
      <div className="col-2">
        <img
          alt="?"
          src={story?.avatar && asset(story.avatar)}
          className="avatar"
          onClick={() => handleShowStoryDetail(story)}
        />
      </div>
      <div className="col">
        <div className="name">
          <Link
            to={`/story/${story?.slug}`}
            className="text-decoration-none fs-md"
          >
            {story.name}
          </Link>
        </div>
        <div className="d-flex justify-content-between">
          <div className="chapter-reading fs-small">
            {isAuth && (
              <>
                {isMarked
                  ? `Đánh dấu ${story?.pivot?.marked_index}/${story?.chapters_count}`
                  : `Đã đọc ${story?.pivot?.index}/${story?.chapters_count}`}
              </>
            )}

            {isAuth && (
              <i
                className="bi bi-trash-fill trash-icon"
                onClick={() => handleDestroyStory(story?.id)}
              ></i>
            )}
            {isAuth && (
              <i
                className={`bi bi-bell-fill bell-icon ${
                  story?.pivot?.notified && "active"
                }`}
                onClick={() => !loading && handleNotifyStory(story?.id)}
              ></i>
            )}
          </div>
          {isAuth && (
            <Link
              to={`/story/${story?.slug}/chapter/${story?.pivot?.index}`}
              className="continue-reading-btn"
            >
              Đọc tiếp
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default StorySimple;
