import "./StoryHome.scss";

import { handleGetStoryService } from "../../../services/AdminServices";
import { useEffect } from "react";
import { useState } from "react";
import Story from "../../../containers/story/Story";
import { Link } from "react-router-dom";
import AdminLayout from "../../../containers/admin/layouts/AdminLayout";

const StoryHome = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetchStory();

    async function fetchStory() {
      try {
        let res = await handleGetStoryService();
        if (res?.success) {
          setStories([...res.data]);
        }
      } catch (error) {}
    }

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
        <div className="stories">
          {stories &&
            stories.length > 0 &&
            stories.map((item, index) => {
              return (
                <div className="col-lg-6 border-bottom" key={item.id}>
                  <Story story={item} isAdmin={true} />
                </div>
              );
            })}
        </div>
      </div>
    </AdminLayout>
  );
};
export default StoryHome;
