import { AiFillFlag, AiOutlineFieldTime } from "react-icons/ai";
import { BiGlassesAlt, BiLike } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { Link } from "react-router-dom";
import avatarDefault from "../../assets/avatar/default.png";
import "./Comment.scss";
const Comment = () => {
  return (
    <div className="comment-data">
      <div className="avatar">
        <img src={avatarDefault} alt="Not found" className="img" />
      </div>
      <div className="comment-body">
        <div className="user-name">Nguyen Phuc</div>
        <div className="comment-info">
          <span className="time">
            <AiOutlineFieldTime size={"1.5em"} />
            10 ngay truoc
          </span>
          <span className="chapter">
            <BiGlassesAlt size={"1.5em"} />
            Chuong 1000
          </span>
        </div>
        <div className="comment-content">
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
        <div className="comment-report">
          <span className="like">
            <BiLike />
            Like
          </span>
          <span className="reply">
            <BsReply />
            Trả lời
          </span>
          <span className="report">
            <AiFillFlag />
            Báo cáo
          </span>
        </div>
      </div>
    </div>
  );
};
export default Comment;
