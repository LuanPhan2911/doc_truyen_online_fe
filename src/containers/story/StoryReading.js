import { Link, useNavigate } from "react-router-dom";
import { asset } from "../../utils/Helper";
import "./StoryReading.scss";
import { useEffect, useState } from "react";
import {
  handleDestroyStoriesReadingService,
  handleGetStoriesReadingService,
} from "../../services/UserServices";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const StoryReading = () => {
  const [storiesReading, setStoriesReading] = useState([]);
  const { isAuth } = useSelector((state) => state.auth);
  const { id: userId } = useSelector((state) => state.user);
  const navigate = useNavigate();
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
  const handleShowStoryDetail = (story) => {
    navigate(`story/${story?.slug}`);
  };
  const handleDestroyStoryReading = async (storyId) => {
    try {
      const res = await handleDestroyStoriesReadingService(storyId);
      if (res?.success) {
        toast.success("Xóa thành công!");
        fetchStoriesReading();
      }
    } catch (error) {}
  };

  return (
    <div className="story-reading">
      <h4>Đang đọc</h4>
      {storiesReading?.length > 0 &&
        storiesReading?.map((story) => {
          const { pivot } = story;
          return (
            <div className="row story-reading" key={story.id}>
              <div className="col-3">
                <img
                  alt="?"
                  src={story?.avatar && asset(story.avatar)}
                  className="avatar"
                  onClick={() => handleShowStoryDetail(story)}
                />
              </div>
              <div className="col-9">
                <div className="name">
                  <Link
                    to={`/story/${story?.slug}`}
                    className="text-decoration-none fs-md"
                  >
                    {story.name}
                  </Link>
                </div>
                <div className="chapter-reading fs-small">
                  Đã đọc {pivot?.index}/{story?.chapters_count}{" "}
                  {isAuth && (
                    <i
                      className="bi bi-trash-fill trash-icon"
                      onClick={() => handleDestroyStoryReading(story?.id)}
                    ></i>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default StoryReading;
