/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  handleGetStoriesReadingPaginateService,
  handleUpdateStoryNotifiesService,
} from "../../services/UserServices";
import PaginateLink from "../../components/PaginateLink";
import { useSearchParams } from "react-router-dom";
import StorySimple from "../story/StorySimple";
const StoryReading = () => {
  const [stories, setStories] = useState({});
  const [qs] = useSearchParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchStoryReading();
  }, [qs.get("page")]);
  async function fetchStoryReading() {
    try {
      let res = await handleGetStoriesReadingPaginateService({
        page: qs.get("page") || 1,
      });
      if (res?.success) {
        setStories(res.data);
      }
    } catch (error) {}
  }
  const handleDestroyStoryReading = () => {
    fetchStoryReading();
  };
  const handleNotifyStoryReading = async (storyId) => {
    setLoading(true);
    try {
      let res = await handleUpdateStoryNotifiesService(storyId);
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
            handleDestroyStoryReading={handleDestroyStoryReading}
            handleNotifyStoryReading={handleNotifyStoryReading}
            loading={loading}
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
export default StoryReading;
