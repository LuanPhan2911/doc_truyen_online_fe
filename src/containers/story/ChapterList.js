import { BsSortDownAlt } from "react-icons/bs";

import "./ChapterList.scss";
const ChapterList = () => {
  return (
    <div id="chapter-list-main">
      <BsSortDownAlt className="story-sort active" />
      <div className="chapter-list-content">
        <div className="chapter-list-name">
          Chương 1: Ngày nào đó bắt đầu <span>(2 năm trước)</span>
        </div>
        <div className="chapter-list-name">
          Chương 1: Ngày nào đó bắt đầu <span>(2 năm trước)</span>
        </div>
        <div className="chapter-list-name">
          Chương 1: Ngày nào đó bắt đầu <span>(2 năm trước)</span>
        </div>
        <div className="chapter-list-name">
          Chương 1: Ngày nào đó bắt đầu <span>(2 năm trước)</span>
        </div>
      </div>
    </div>
  );
};
export default ChapterList;
