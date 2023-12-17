import { BsSortDownAlt } from "react-icons/bs";

import "./ChapterList.scss";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { handleGetChapterListSlugService } from "../../services/ChapterService";
import { diffTime } from "../../utils/Helper";
import { handleGetChapterListIdService } from "../../services/AdminServices";

const ChapterList = ({ isAdmin }) => {
  const [chapters, setChapters] = useState([]);
  const [isSortChapter, setSortChapter] = useState(false);
  const { slug, id: storyId } = useParams();
  useEffect(() => {
    async function fetchChapterList() {
      try {
        if (!slug) {
          let res = await handleGetChapterListIdService(storyId);
          if (res?.success) {
            let cpChapter = res.data;
            setChapters([...cpChapter]);
          }
        } else {
          let res = await handleGetChapterListSlugService(slug);
          if (res?.success) {
            let cpChapter = res.data;
            setChapters([...cpChapter]);
          }
        }
      } catch (error) {}
    }
    fetchChapterList();
  }, []);
  useEffect(() => {
    if (isSortChapter) {
      let chapterCp = [...chapters];
      chapterCp = chapterCp.sort((a, b) => {
        return b.index - a.index;
      });
      setChapters([...chapterCp]);
    } else {
      let chapterCp = [...chapters];
      chapterCp = chapterCp.sort((a, b) => {
        return a.index - b.index;
      });
      setChapters([...chapterCp]);
    }
  }, [isSortChapter]);
  return storyId || slug ? (
    <div id="chapter-list-main">
      <div className="chapter-list-action">
        {isAdmin && (
          <Link
            className="btn btn-primary"
            to={`/admin/story/${storyId}/chapter/create`}
          >
            Thêm chương mới
          </Link>
        )}
        <BsSortDownAlt
          className={isSortChapter ? "story-sort active" : "story-sort"}
          onClick={() => setSortChapter(!isSortChapter)}
        />
      </div>
      <div className="chapter-list-content">
        <div className="chapter-list-name row">
          {chapters?.length > 0 &&
            chapters.map((item) => {
              return isAdmin ? (
                <Link
                  to={`/admin/story/${storyId}/chapter/${item.index}`}
                  key={item.index}
                  className="col-lg-6"
                >
                  {item.name} <span>({diffTime(item.created_at)})</span>
                </Link>
              ) : (
                <Link
                  to={`/story/${slug}/chapter/${item.index}`}
                  key={item.index}
                  className="col-lg-6"
                >
                  {item.name} <span>({diffTime(item.created_at)})</span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  ) : (
    <div className="text-danger">Không tìm thấy truyện</div>
  );
};
export default ChapterList;
