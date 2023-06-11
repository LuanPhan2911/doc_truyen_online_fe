import { BsVectorPen } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/stories/150.jpg";
import "./Story.scss";
const Story = ({ story }) => {
  const navigate = useNavigate();
  const handleShowStoryDetail = (storyDetail) => {
    navigate(`/story/${storyDetail?.slug}`, {
      state: storyDetail,
    });
  };
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="story">
        <div
          className="story-image"
          onClick={() => handleShowStoryDetail(story)}
        >
          <img src={image} alt="Not found" />
        </div>
        <div className="story-info">
          <div
            className="name text-overflow-1-line"
            onClick={() => handleShowStoryDetail(story)}
          >
            {story?.name}
          </div>
          <div className="story-description text-overflow-2-line ">
            {story?.description}
          </div>
          <div className="auth-genre">
            <div className="auth text-overflow-1-line">
              <BsVectorPen size={"1.5em"} />
              <span> Cửu Hanh</span>
            </div>
            <div className="genre">Huyền huyễn</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Story;
