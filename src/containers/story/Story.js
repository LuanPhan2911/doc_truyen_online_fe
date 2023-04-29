import { BsVectorPen } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/stories/150.jpg";
const Story = ({ story }) => {
  const navigate = useNavigate();
  const handleShowStoryDetail = (storyDetail) => {
    navigate(`/story/${storyDetail?.slug}`, {
      state: storyDetail,
    });
  };
  return (
    <div className="col-lg-6 col-sm-12 p-3">
      <div className="row">
        <div className="image col-3">
          <div className="story-image">
            <img
              src={image}
              alt="Not found"
              width={"72px"}
              className="story-image"
            />
          </div>
        </div>
        <div className="info col-9">
          <div className="name">
            <button
              className="btn story-title m-2"
              onClick={() => handleShowStoryDetail(story)}
            >
              {story?.name}
            </button>
          </div>
          <div className="story-description m-2">{story?.description}</div>
          <div className="d-flex align-items-center mt-2 py-1 justify-content-between">
            <div className="d-flex align-items-center mr-auto text-secondary">
              <span className="truncate-140 text-left">
                <BsVectorPen /> Kinh Đào Hãi Lãng{" "}
              </span>
            </div>
            <Link to={"#"}>
              <span className="d-inline-block border border-primary small px-2 text-primary truncate-100">
                Tiên Hiệp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Story;
