import { BsSortDownAlt } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./ChapterList.scss";
const ChapterList = () => {
  return (
    <div className="chapter-list">
      <div className="d-flex align-items-center justify-content-between">
        <h4>Danh sách chương</h4>
        <BsSortDownAlt className="story-sort active" />
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="text-overflow-1-line chapter-name">
            Chuong 1: Mot con vit
            <span>(2 nam truoc)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChapterList;
