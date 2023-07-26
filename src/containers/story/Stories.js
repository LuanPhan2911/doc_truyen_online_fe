import Story from "./Story";
import { useFetch } from "../../hooks";
import { handleGetStoryService } from "../../services/StoryService";
import "./Stories.scss";
const Stories = () => {
  let { data: stories } = useFetch(handleGetStoryService);
  return (
    <div className="stories-main">
      {stories &&
        stories.length > 0 &&
        stories.map((item, index) => {
          return <Story key={index} story={item} />;
        })}
    </div>
  );
};
export default Stories;
