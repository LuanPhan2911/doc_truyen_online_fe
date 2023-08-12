import { useSelector } from "react-redux";
import "./StoryHome.scss";

import { handleGetStoryService } from "../../../services/AdminServices";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Story from "../../story/Story";
import { Link } from "react-router-dom";

const StoryHome = () => {
  const userId = useSelector((state) => state.user.id);
  const [stories, setStories] = useState([]);
  useLayoutEffect(() => {
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
    <div className="admin-story-home content">
      <div className="admin-menu">
        <Link to={"create"} className="btn btn-success">
          Thêm truyện mới
        </Link>
      </div>
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
