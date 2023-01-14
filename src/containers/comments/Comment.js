import { AiFillFlag, AiOutlineFieldTime } from "react-icons/ai";
import { BiGlassesAlt, BiLike } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { Link } from "react-router-dom";
import avatarDefault from "../../assets/avatar/default.png";
const Comment = () => {
  return (
    <div className="media d-flex">
      <div className="user-avatar">
        <img src={avatarDefault} alt="Not found" className="img" />
      </div>
      <div className="media-body">
        <div className="user-comment-name">
          <Link>Nguyen Phuc</Link>
        </div>
        <div className="comment-info">
          <span>
            <AiOutlineFieldTime />
            10 ngay truoc
          </span>
          <span>
            <BiGlassesAlt />
            Chuong 1000
          </span>
        </div>
        <div className="comment-body">
          <span>
            Đôi lời review về Truyện
            <br />
            Bối cảnh truyện thì kiểu như bao truyện yêu mà từ hành truyện khác
            <br />
            main vẫn là người xuyên việt <br />
            ngón tay vàng bảng thực đơn bức tượng
            <br />
            tính cách tiện tiện sợ chết nên làm việc kiểu cẩn thận <br />
            hệ thống tự luyện từ 1-9 phầm (3 phẩm bán thần) (đối vs ca thì trừ
            điểm hệ thống này)
            <br />
            về nhân duyên thì crush 2 e đạo giáo (ca cũng điểm trừ luôn vì main
            kiểu thái dám) ( nói sao ta kiểu có tặc dâm k có tặc đảm)
            <br />k có hệ thống đan dược chế khí chủ có chế bùa <br />
            phần quân công của đội cũng hơi non tự nhiên main nấu cho lính ăn
            thì làm sao đc
            <br />
            đánh giá cũng tầm 4.0* đi <br />
          </span>
        </div>
        <div className="comment-report d-flex justify-content-end">
          <button className="btn btn-submit bg-transparent">
            <BiLike />
            Like
          </button>
          <button className="btn btn-submit bg-transparent">
            <BsReply />
            Tra loi
          </button>
          <button className="btn btn-submit bg-transparent">
            <AiFillFlag />
            Bao cao
          </button>
        </div>
      </div>
    </div>
  );
};
export default Comment;
