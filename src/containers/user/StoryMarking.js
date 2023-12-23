/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  deleteStoryReading,
  getStoriesMarkingPaginate,
  putUserNotifies,
} from "../../services/UserServices";
import PaginateLink from "../../components/PaginateLink";
import { useSearchParams } from "react-router-dom";
import StorySimple from "../story/StorySimple";
import { toast } from "react-toastify";
const StoryMarking = () => {
  const [stories, setStories] = useState({});
  const [qs] = useSearchParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchStoriesReading();
  }, [qs.get("page")]);
  async function fetchStoriesReading() {
    try {
      let res = await getStoriesMarkingPaginate({
        page: qs.get("page") || 1,
      });
      if (res?.success) {
        setStories(res.data);
      }
    } catch (error) {}
  }
  const handleDestroyStoryMarking = async (storyId) => {
    try {
      const res = await deleteStoryReading(storyId);
      if (res?.success) {
        toast.success("Xóa thành công!");
        fetchStoriesReading();
      }
    } catch (error) {}
  };
  const handleNotifyStoryMarking = async (storyId) => {
    setLoading(true);
    try {
      let res = await putUserNotifies(storyId);
      if (res?.success) {
        setStories((prev) => {
          return {
            ...prev,
            data: prev.data.map((item) => {
              return item.id !== storyId
                ? item
                : {
                    ...item,
                    pivot: {
                      ...item.pivot,
                      notified: !item.pivot.notified,
                    },
                  };
            }),
          };
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="col-lg-7">
      {stories?.data?.map((story) => {
        return (
          <StorySimple
            key={story?.id}
            story={story}
            handleDestroyStory={handleDestroyStoryMarking}
            handleNotifyStory={handleNotifyStoryMarking}
            loading={loading}
            isMarked={true}
          />
        );
      })}
      {stories?.data?.length > 0 && (
        <PaginateLink
          totalCount={stories?.total}
          currentPage={stories?.current_page}
          pageSize={stories?.per_page}
          siblingCount={1}
        />
      )}
    </div>
  );
};
export default StoryMarking;
