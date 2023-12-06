import { useSelector } from "react-redux";
import "./StoryHome.scss";

import { handleGetStoryService } from "../../../services/AdminServices";
import { useLayoutEffect } from "react";
import { useState } from "react";
import Story from "../../story/Story";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminLayout>
      <div className="content">
        <div className="mb-3">
          <Link to="/admin/story/create" className="btn btn-success">
            Thêm truyện mới
          </Link>
        </div>
        <div className="col">
          {stories &&
            stories.length > 0 &&
            stories.map((item, index) => {
              return <Story key={index} story={item} isAdmin={true} />;
            })}
        </div>
      </div>
    </AdminLayout>
  );
};
export default StoryHome;
