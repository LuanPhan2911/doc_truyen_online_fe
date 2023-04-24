import { Link } from "react-router-dom";
import Story from "./Story";
import { useFetch } from "../../hooks/useFetch";
import { handleGetStoryService } from "../../services/StoryService";
const Stories = () => {
  let { data: stories } = useFetch(handleGetStoryService);
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="h4">Biên tập viên đề cử</div>
        <Link to={""} className="global-link">
          Xem tất cả
        </Link>
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
