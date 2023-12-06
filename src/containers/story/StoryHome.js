import { Link } from "react-router-dom";

import "./StoryHome.scss";
import { handleGetStoryService } from "../../services/StoryService";
import { useFetch } from "../../hooks";
import Story from "./Story";
const StoryHome = () => {
  let { data: stories } = useFetch(handleGetStoryService);

  return (
    <div className="bg-light p-3 rounded">
      <div className="d-flex justify-content-between">
        <div className="all-story-title">Biên tập viên đề cử</div>
        <Link className="all-story" to={"/story"}>
          Xem tất cả
        </Link>
      </div>
      <div className="row justify-content-center">
        {stories &&
          stories.length > 0 &&
          stories.map((item, index) => {
            return <Story key={index} story={item} />;
          })}
      </div>
    </div>
  );
};
export default StoryHome;
