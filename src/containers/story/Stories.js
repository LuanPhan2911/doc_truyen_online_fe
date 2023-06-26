import { Link } from "react-router-dom";
import Story from "./Story";
import { useFetch } from "../../hooks/useFetch";
import { handleGetStoryService } from "../../services/StoryService";
import "./Stories.scss";
const Stories = () => {
  let { data: stories } = useFetch(handleGetStoryService);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="all-story-title">Biên tập viên đề cử</div>
        <div className="all-story">Xem tất cả</div>
      </div>

      <div className="row">
        {stories &&
          stories.length > 0 &&
          stories.map((item, index) => {
            return <Story key={index} story={item} />;
          })}
      </div>
    </>
  );
};
export default Stories;
