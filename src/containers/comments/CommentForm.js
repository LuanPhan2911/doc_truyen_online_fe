import avatarDefault from "../../assets/avatar/default.png";
import { AiOutlineSend } from "react-icons/ai";
const CommentForm = () => {
  return (
    <div className="comment-form d-flex gap-3">
      <div className="user-avatar">
        <img src={avatarDefault} alt="Not found" className="img" />
      </div>
      <div className="comment-input">
        <textarea
          className="form-control comment-input-area"
          placeholder="Nhap binh luan cua ban"
        ></textarea>
        <button className="btn btn-submit bg-transparent text-primary btn-send-comment">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};
export default CommentForm;
