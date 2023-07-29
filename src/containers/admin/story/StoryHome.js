import { useSelector } from "react-redux";
import "./StoryHome.scss";
import useFetch from "../../../hooks/useFetch";
import { handleGetStoryService } from "../../../services/AdminServices";
import { useEffect } from "react";
import { useState } from "react";
import Story from "../../story/Story";

const StoryHome = () => {
  const userId = useSelector((state) => state.user.id);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchStory() {
      try {
        let res = await handleGetStoryService({ user_id: userId });
        if (res?.success) {
          setStories([...res.data]);
        }
      } catch (error) {}
    }
    fetchStory();
  }, []);

  return (
    <div className="admin-story-home">
      <div className="admin-menu"></div>
      <div className="stories-main">
        {stories &&
          stories.length > 0 &&
          stories.map((item, index) => {
            return <Story key={index} story={item} isAdmin={true} />;
          })}
      </div>
    </div>
  );
};
export default StoryHome;
