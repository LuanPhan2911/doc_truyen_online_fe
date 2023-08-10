import { Link } from "react-router-dom";

import "./StoryHome.scss";
import { handleGetStoryService } from "../../services/StoryService";
import { useFetch } from "../../hooks";
import Story from "./Story";
const StoryHome = () => {
  let { data: stories } = useFetch(handleGetStoryService);
  console.log(stories);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="all-story-title">Biên tập viên đề cử</div>
        <Link className="all-story" to={"/story"}>
          Xem tất cả
        </Link>
      </div>
      <div className="stories-main">
        {stories &&
          stories.length > 0 &&
          stories.map((item, index) => {
            return <Story key={index} story={item} />;
          })}
      </div>
    </>
  );
};
export default StoryHome;
