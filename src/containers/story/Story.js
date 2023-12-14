import { useNavigate } from "react-router-dom";
import { asset } from "../../utils/Helper";
import "./Story.scss";
import { useSelector } from "react-redux";
import _ from "lodash";
const Story = ({ story, isAdmin }) => {
  const navigate = useNavigate();
  const borderColor = useSelector((state) => state.app.borderColor);
  // const continueRead = useSelector((state) => state.story.continueRead);
  const handleShowStoryDetail = (storyDetail) => {
    if (isAdmin) {
      navigate(`/admin/story/${storyDetail?.slug}`);
    } else {
      navigate(`/story/${storyDetail?.slug}`);
    }
  };
  return (
    <div className="story row">
      <div
        className="story-image col-4"
        onClick={() => handleShowStoryDetail(story)}
      >
        <img src={asset(story?.avatar)} alt="Not found" className="img-fluid" />
      </div>
      <div className="story-info col-8">
        <div
          className="name text-overflow-1-line"
          onClick={() => handleShowStoryDetail(story)}
        >
          {story?.name}
        </div>
        <div className="story-description text-overflow-2-line ">
          {story?.description}
        </div>
      </div>
      <div className="auth-genre d-flex justify-content-between my-2">
        <div className="auth text-overflow-1-line">
          <i className="bi bi-pen"></i>
          <span className="mx-2 fst-italic">{story.author_name}</span>
        </div>
        <div className="genre text-center ">
          <span className={`border rounded p-2 fs-6 ${_.sample(borderColor)}`}>
            {story?.genre?.name}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Story;
