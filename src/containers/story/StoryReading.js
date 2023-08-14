import { useNavigate } from "react-router-dom";
import { asset } from "../../utils/Helper";
import "./StoryReading.scss";
const StoryReading = ({ story }) => {
  const navigate = useNavigate();
  let { pivot } = story;
  const handleShowStory = () => {
    navigate(`/story/${story?.slug}`, {
      state: {
        storyId: story.id,
        index: pivot.index,
      },
    });
  };

  return (
    <div className="row story-reading" onClick={() => handleShowStory()}>
      <div className="col-3">
        <img
          alt="?"
          src={story?.avatar && asset(story.avatar)}
          className="avatar"
        />
      </div>
      <div className="col-9">
        <div className="name">{story.name}</div>
        <div className="chapter-reading">
          Đã đọc {pivot?.index}/{story?.chapters_count}{" "}
        </div>
      </div>
    </div>
  );
};
export default StoryReading;
