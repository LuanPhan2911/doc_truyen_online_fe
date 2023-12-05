import avatarDefault from "../../assets/avatar/default.png";
import { AiOutlineSend } from "react-icons/ai";
import "./CommentForm.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

import { asset, checkPropertiesIsEmpty } from "../../utils/Helper";
import { handleSendCommentService } from "../../services/CommentServices";
import { toast } from "react-toastify";
const CommentForm = ({ isReply, storyId, parentId, handleSetNewComment }) => {
  const initComment = { message: "", parent_id: "", user_id: "" };
  const user = useSelector((state) => state.user);

  const [comment, setComment] = useState({ ...initComment });

  const handleFucusInput = () => {
    if (!user.isAuth) {
    }
  };

  const handleChangeInput = (value, name) => {
    let cpComment = { ...comment };
    cpComment[name] = value;
    setComment({ ...cpComment });
  };
  const handleSendComment = async () => {
    let cpComment = { ...comment };
    cpComment["user_id"] = user.id;
    cpComment["commentedId"] = storyId;
    cpComment["type"] = "story";
    cpComment["parent_id"] = parentId || null;

    if (!checkPropertiesIsEmpty(cpComment, ["parent_id"])) {
      try {
        let res = await handleSendCommentService(cpComment);
        if (res?.success) {
          let comment = res.data;
          handleSetNewComment(comment, parentId);

          toast.success("Bình luận thành công!");
          setComment({ ...initComment });
        }
      } catch (error) {}
    }
  };
  return (
    <div className="comment-form">
      <div className="comment-avatar">
        <img
          src={user?.avatar ? asset(user.avatar) : avatarDefault}
          alt="Not found"
        />
      </div>
      <div className="comment-input">
        <textarea
          placeholder={
            isReply ? "Nhập trả lời của bạn" : "Nhập bình luận của bạn"
          }
          onFocus={() => handleFucusInput()}
          onChange={(e) => handleChangeInput(e.target.value, "message")}
          value={comment.message}
        ></textarea>
        <AiOutlineSend
          className="send-comment"
          onClick={() => handleSendComment()}
        />
      </div>
    </div>
  );
};
export default CommentForm;
