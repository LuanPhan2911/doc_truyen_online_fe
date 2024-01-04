import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthorStories } from "../../services/StoryService";
import Story from "../../containers/story/Story";

const Author = () => {
  const { slug } = useParams();
  const [author, setAuthor] = useState({});
  useEffect(() => {
    async function fetchStory() {
      try {
        let res = await getAuthorStories(slug);
        if (res?.success) {
          setAuthor(res.data);
        }
      } catch (error) {}
    }
    fetchStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="author-name mb-3">
        <h3 className="text-bold">{author?.name}</h3>
      </div>
      <div className="author-story row">
        {author?.stories?.map((item, index) => {
          return (
            <div className="col-lg-6 border-bottom" key={item.id}>
              <Story story={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Author;
