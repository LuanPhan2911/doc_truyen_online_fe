import { BsVectorPen } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./Story.scss";
import { asset } from "../../utils/Helper";
import { useEffect, useState } from "react";
const Story = ({ story, isAdmin }) => {
  const navigate = useNavigate();
  const [genreName, setGenreName] = useState("");
  useEffect(() => {
    const { genres } = story;
    if (genres?.length > 0) {
      let genre = genres.find((item) => item.type === 1);
      setGenreName(genre.name);
    }
  }, [story]);
  const handleShowStoryDetail = (storyDetail) => {
    if (isAdmin) {
      navigate(`/admin/story/${storyDetail?.id}`, {});
    } else {
      navigate(`/story/${storyDetail?.slug}`, {
        state: storyDetail,
      });
    }
  };
  return (
    <div className="story">
      <div className="story-image" onClick={() => handleShowStoryDetail(story)}>
        <img src={asset(story?.avatar)} alt="Not found" />
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
            <span>{story.author_name}</span>
          </div>
          <div className="genre">{genreName}</div>
        </div>
      </div>
    </div>
  );
};
export default Story;
