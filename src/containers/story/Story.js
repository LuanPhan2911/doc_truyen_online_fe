import { useNavigate } from "react-router-dom";
import { asset } from "../../utils/Helper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Story.scss";
const Story = ({ story, isAdmin }) => {
  const navigate = useNavigate();
  const [genreName, setGenreName] = useState("");
  const continueRead = useSelector((state) => state.story.continueRead);

  useEffect(() => {
    const { genres } = story;
    if (genres?.length > 0) {
      let genre = genres.find((item) => item.type === 1);
      setGenreName(genre.name);
    }
  }, [story]);

  const handleShowStoryDetail = (storyDetail) => {
    if (isAdmin) {
      navigate(`/admin/story/${storyDetail?.slug}`);
    } else {
      navigate(`/story/${storyDetail?.slug}`);
    }
  };
  return (
    <div className="story row bg-light shadow">
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
      <div className="auth-genre d-flex justify-content-between">
        <div className="auth text-overflow-1-line">
          <i className="bi bi-pen"></i>
          <span className="mx-2 fst-italic">{story.author_name}</span>
        </div>
        <div className="genre text-center ">
          <span className="border rounded border-primary px-2 fs-6">
            {genreName}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Story;
