import { Link } from "react-router-dom";
import Stories from "./Stories";
import "./StoryHome.scss";
import { handleGetStoryService } from "../../services/StoryService";
import { useFetch } from "../../hooks";
const StoryHome = () => {
  let { data: stories } = useFetch(handleGetStoryService);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="all-story-title">Biên tập viên đề cử</div>
        <Link className="all-story" to={"/story"}>
          Xem tất cả
        </Link>
      </div>
      <Stories stories={stories} />
    </>
  );
};
export default StoryHome;
