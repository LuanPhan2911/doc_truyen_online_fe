import { useDispatch, useSelector } from "react-redux";
import StoryReading from "./StoryReading";
import { useEffect, useState } from "react";
import { handleGetStoriesService } from "../../services/UserServices";
import { setContinueRead } from "../../features/storySlice";

const UserRead = () => {
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchStory() {
      try {
        let res = await handleGetStoriesService(userId);
        if (res?.success) {
          dispatch(setContinueRead(res.data));
          setStories([...res.data]);
        }
      } catch (error) {}
    }
    fetchStory();
  }, []);
  return (
    <>
      <div className="h4">Đang đọc</div>
      {stories &&
        stories.length > 0 &&
        stories.map((item, index) => {
          return <StoryReading key={index} story={item} />;
        })}
    </>
  );
};
export default UserRead;
