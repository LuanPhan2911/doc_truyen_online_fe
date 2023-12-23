import "./StoryHome.scss";

import { getStories } from "../../../services/AdminServices";
import { useEffect } from "react";
import { useState } from "react";
import Story from "../../../containers/story/Story";
import { Link } from "react-router-dom";
import AdminLayout from "../../../containers/admin/layouts/AdminLayout";
import PaginateLink from "../../../components/PaginateLink";
import { useQueryString } from "../../../hooks";

const StoryHome = () => {
  const [stories, setStories] = useState({});
  const { page } = useQueryString();
  useEffect(() => {
    fetchStory();

    async function fetchStory() {
      try {
        let res = await getStories({
          page,
        });
        if (res?.success) {
          setStories(res.data);
        }
      } catch (error) {}
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <AdminLayout>
      <div className="content">
        <div className="mb-3">
          <Link to="/admin/story/create" className="btn btn-success">
            Thêm truyện mới
          </Link>
        </div>
        <div className="stories">
          {stories?.data?.map((item, index) => {
            return (
              <div className="col-lg-6 border-bottom" key={item.id}>
                <Story story={item} isAdmin={true} />
              </div>
            );
          })}
        </div>

        <PaginateLink
          currentPage={stories?.current_page}
          pageSize={stories?.per_page}
          siblingCount={1}
          totalCount={stories?.total}
        />
      </div>
    </AdminLayout>
  );
};
export default StoryHome;
