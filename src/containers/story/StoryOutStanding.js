import { Link } from "react-router-dom";
import { handleGetStoryService } from "../../services/StoryService";
import { useFetch } from "../../hooks";
import Story from "./Story";
import "./StoryOutStanding.scss";
const StoryOutStanding = () => {
  let { data: stories } = useFetch(handleGetStoryService);

  return (
    <div className="bg-light p-3 rounded">
      <div className="d-flex justify-content-between">
        <div className="all-story-title">Biên tập viên đề cử</div>
        <Link className="all-story" to={"/story"}>
          Xem tất cả
        </Link>
      </div>
      <div className="row">
        {stories &&
          stories.length > 0 &&
          stories.map((item) => {
            return (
              <div className="col-lg-6 col-md-8" key={item.id}>
                <Story story={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default StoryOutStanding;
