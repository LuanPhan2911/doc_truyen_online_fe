import { BsSortDownAlt } from "react-icons/bs";

import "./ChapterList.scss";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { handleGetChapterListService } from "../../services/ChapterService";
import { diffTime } from "../../utils/Helper";

const ChapterList = ({ storyId, isAdmin }) => {
  const [chapters, setChapters] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    async function fetchChapterList() {
      try {
        let res = await handleGetChapterListService(storyId);
        if (res?.success) {
          let cpChapter = res.data;
          setChapters([...cpChapter]);
        }
      } catch (error) {}
    }
    fetchChapterList();
  }, []);

  return (
    <div id="chapter-list-main">
      <div className="chapter-list-action">
        {isAdmin && (
          <Link className="btn btn-primary" to={"chapter/create"}>
            Thêm chương mới
          </Link>
        )}
        <BsSortDownAlt className="story-sort active" />
      </div>
      <div className="chapter-list-content">
        <div className="chapter-list-name">
          {chapters?.length > 0 &&
            chapters.map((item) => {
              return isAdmin ? (
                <Link to={`chapter/${item.index}`} key={item.index}>
                  {item.name} <span>({item.created_at})</span>
                </Link>
              ) : (
                <Link
                  to={`/story/${name}/chapter/${item.index}`}
                  key={item.index}
                >
                  {item.name} <span>({diffTime(item.created_at)})</span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ChapterList;
