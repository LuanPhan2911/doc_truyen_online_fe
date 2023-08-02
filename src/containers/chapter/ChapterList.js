import { BsSortDownAlt } from "react-icons/bs";

import "./ChapterList.scss";
import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";

const ChapterList = ({ chapters, isAdmin }) => {
  const navigate = useNavigate();
  const handleShowChapter = () => {};

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
              return (
                <Link to={`chapter/${item.index}`}>
                  {item.name} <span>({item.created_at})</span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ChapterList;
