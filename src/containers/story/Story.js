import { BsVectorPen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Story.scss";
import { asset } from "../../utils/Helper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const getIndex = (continueRead, storyId) => {
    let story =
      continueRead?.length > 0 &&
      continueRead.find((item) => item.id === storyId);
    if (story) {
      return story?.pivot?.index;
    }
    return null;
  };
  const handleShowStoryDetail = (storyDetail) => {
    if (isAdmin) {
      navigate(`/admin/story/${storyDetail?.slug}`, {});
    } else {
      navigate(`/story/${storyDetail?.slug}`, {
        state: {
          storyId: storyDetail?.id,
          slug: storyDetail?.slug,
          index: getIndex(continueRead, storyDetail?.id) || 1,
        },
      });
    }
    getIndex(continueRead, storyDetail?.id);
  };
  return (
    <div className="story col-lg-5 col-md-8 m-2 row bg-light">
      <div
        className="story-image col-3"
        onClick={() => handleShowStoryDetail(story)}
      >
        <img src={asset(story?.avatar)} alt="Not found" className="img-fluid" />
      </div>
      <div className="story-info col-9">
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
      <div className="auth-genre row my-2">
        <div className="auth text-overflow-1-line col-6">
          <BsVectorPen size={"1.5em"} />
          <span className="mx-2">{story.author_name}</span>
        </div>
        <div className="genre col-6 border text-center rounded">
          {genreName}
        </div>
      </div>
    </div>
  );
};
export default Story;
