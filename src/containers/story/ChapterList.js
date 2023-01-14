import { BsSortDownAlt } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChapterList = () => {
  return (
    <div className="col-12 chapter-list">
      <div className="d-flex align-items-center justify-content-between">
        <h4>Danh sach chuong</h4>
        <BsSortDownAlt size={"25px"} className="btn-story-sort" />
      </div>
      <div className="row">
        <div className="col-4 border-bottom">
          <Link className="override-link">
            <div className="text-overflow-1-line py-2 mb-2">
              Chuong 1 Ngay hom nay la ngat tan the cua the gioi
              <small>2 nam truoc</small>
            </div>
          </Link>
        </div>
        <div className="col-4 border-bottom">
          <Link className="override-link">
            <div className="text-overflow-1-line py-2 mb-2">
              Chuong 1 Ngay hom nay la ngat tan the cua the gioi
              <small>2 nam truoc</small>
            </div>
          </Link>
        </div>
        <div className="col-4 border-bottom">
          <Link className="override-link">
            <div className="text-overflow-1-line py-2 mb-2">
              Chuong 1 Ngay hom nay la ngat tan the cua the gioi
              <small>2 nam truoc</small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ChapterList;
