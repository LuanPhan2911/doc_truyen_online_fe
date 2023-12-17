import avatarDefault from "../../assets/avatar/default.png";
import { AiOutlineSend } from "react-icons/ai";
import "./CommentForm.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asset, checkPropertiesIsEmpty } from "../../utils/Helper";
import { handleSendCommentService } from "../../services/CommentServices";
import { toast } from "react-toastify";
import { handleShow } from "../../features/authSlice";
import { useParams } from "react-router-dom";
import { handleRateStoryService } from "../../services/StoryService";
const CommentForm = ({
  isReply,
  storyId,
  parentId,
  handleSetNewComment,
  type,
  storyRatings,
}) => {
  const initComment = { message: "", parent_id: "", user_id: "" };
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [comment, setComment] = useState({ ...initComment });
  const [isLeak, setLeak] = useState(false);
  const handleFocusInput = () => {
    if (!isAuth) {
      dispatch(handleShow("login"));
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
    cpComment["commentable_type"] = "story";
    cpComment["parent_id"] = parentId || null;
    cpComment["is_leak"] = isLeak ? 1 : 0;
    cpComment["type"] = type || 0;

    if (!checkPropertiesIsEmpty(cpComment, ["parent_id"])) {
      try {
        let res = await handleSendCommentService(cpComment);
        if (res?.success) {
          let comment = res.data;
          let resRating = null;
          if (!isReply && type === 1) {
            let ratings = {};
            storyRatings.forEach((item) => {
              ratings[item.id] = item.value;
            });
            ratings["comment_id"] = comment.id;

            resRating = await handleRateStory(ratings);
          }
          comment["rate_story"] = resRating;
          handleSetNewComment(comment, parentId);
          toast.success(`${type === 0 ? "Bình luận" : "Đánh giá"} thành công!`);
          setComment({ ...initComment });
        }
      } catch (error) {}
    }
  };
  const handleRateStory = (ratings) => {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await handleRateStoryService(slug, ratings);
        if (res?.success) {
          resolve(res?.data);
        }
      } catch (error) {
        reject(error);
      }
    });
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
            isReply
              ? "Nhập trả lời của bạn"
              : `Nhập ${type === 0 ? "bình luận" : "đánh giá"} của bạn`
          }
          onFocus={() => handleFocusInput()}
          onChange={(e) => handleChangeInput(e.target.value, "message")}
          value={comment.message}
        ></textarea>
        <AiOutlineSend
          className="send-comment"
          onClick={() => handleSendComment()}
        />
        {type === 1 && (
          <div className="comment-is-leak">
            <input
              type="checkbox"
              className="form-check-input me-2"
              onChange={(e) => setLeak(!isLeak)}
              checked={isLeak}
            />
            <label className="form-check-label fs-small">
              Tiết lộ cốt truyện
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentForm;
