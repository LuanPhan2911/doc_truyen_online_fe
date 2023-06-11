import avatarDefault from "../../assets/avatar/default.png";
import { AiOutlineSend } from "react-icons/ai";
import "./CommentForm.scss";
const CommentForm = () => {
  return (
    <div className="comment-form">
      <div className="avatar">
        <img src={avatarDefault} alt="Not found" />
      </div>
      <div className="comment-input">
        <textarea placeholder="Nhap binh luan cua ban"></textarea>
        <AiOutlineSend className="send-comment" />
      </div>
    </div>
  );
};
export default CommentForm;
