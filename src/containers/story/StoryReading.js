import { Link } from "react-router-dom";

import "./StoryReading.scss";
import { useEffect, useState } from "react";
import {
  handleDestroyStoriesReadingService,
  handleGetStoriesReadingService,
  handleUpdateStoryNotifiesService,
} from "../../services/UserServices";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import StorySimple from "./StorySimple";
const StoryReading = () => {
  const [storiesReading, setStoriesReading] = useState([]);
  const { isAuth } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchStoriesReading();
  }, []);
  async function fetchStoriesReading() {
    try {
      let res = await handleGetStoriesReadingService();
      if (res?.success) {
        setStoriesReading(res?.data);
      }
    } catch (error) {}
  }
  const handleDestroyStoryReading = async (storyId) => {
    try {
      const res = await handleDestroyStoriesReadingService(storyId);
      if (res?.success) {
        toast.success("Xóa thành công!");
        fetchStoriesReading();
      }
    } catch (error) {}
  };
  const handleNotifyStoryReading = async (storyId) => {
    setLoading(true);
    try {
      let res = await handleUpdateStoryNotifiesService(storyId);
      if (res?.success) {
        setStoriesReading((prev) => {
          return prev.map((item) => {
            return item.id !== storyId
              ? item
              : {
                  ...item,
                  pivot: {
                    ...item.pivot,
                    notified: !item.pivot.notified,
                  },
                };
          });
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="story-reading-home p-3">
      <div className="d-flex justify-content-between">
        <div className="all-story-title">Đang đọc</div>
        {isAuth && (
          <Link className="all-story" to={"/user/story"}>
            Xem tất cả
          </Link>
        )}
      </div>
      {storiesReading?.length > 0 &&
        storiesReading?.map((story) => {
          return (
            <StorySimple
              key={story?.id}
              story={story}
              handleDestroyStoryReading={handleDestroyStoryReading}
              handleNotifyStoryReading={handleNotifyStoryReading}
              loading={loading}
            />
          );
        })}
    </div>
  );
};
export default StoryReading;
