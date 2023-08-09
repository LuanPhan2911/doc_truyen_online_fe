import { AiFillFlag, AiOutlineFieldTime } from "react-icons/ai";
import { BiGlassesAlt, BiLike } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { Link } from "react-router-dom";
import avatarDefault from "../../assets/avatar/default.png";
import "./Comment.scss";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { asset, diffTime } from "../../utils/Helper";
import Comments from "./Comments";
const Comment = ({ comment: commentProps, isReply, setIsSent }) => {
  const [comment, setComment] = useState({});
  const [replies, setReplies] = useState([]);
  const [user, setUser] = useState({});
  const [showInput, setShowInput] = useState(false);
  const [showRelies, setShowRelies] = useState(false);

  useEffect(() => {
    if (isReply) {
      let { user, ...other } = commentProps;
      setUser({ ...user });
      setComment({ ...other });
    } else {
      let { replies, user, ...other } = commentProps;
      setReplies([...replies]);
      setUser({ ...user });
      setComment({ ...other });
    }
  }, [commentProps]);

  const handleReply = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div className="comment-data">
        <div className="avatar">
          <img
            src={user?.avatar ? asset(user?.avatar) : avatarDefault}
            alt="Not found"
            className="img"
          />
        </div>
        <div className="comment-body">
          <div className="user-name">{user.name}</div>
          <div className="comment-info">
            <span className="time">
              <AiOutlineFieldTime size={"1.5em"} />
              {diffTime(comment?.created_at)}
            </span>
          </div>
          <div className="comment-content">{comment.message}</div>
          {replies?.length > 0 && (
            <div className="comment-replies">
              {!showRelies ? (
                <span onClick={() => setShowRelies(true)}>Xem trả lời</span>
              ) : (
                <>
                  <Comments isReply={true} replies={replies} />
                  <span onClick={() => setShowRelies(false)}>Đóng</span>
                </>
              )}
            </div>
          )}
          {showInput && (
            <CommentForm
              isReply={true}
              parentId={comment.id}
              setIsSent={setIsSent}
              storyId={comment.commentable_id}
            />
          )}
          <div className="comment-report">
            <span className="like">
              <BiLike />
              Like
              <span>{comment.like}</span>
            </span>
            {!isReply && (
              <span className="reply" onClick={() => handleReply()}>
                <BsReply />
                {showInput ? "Đóng" : "Trả lời"}
              </span>
            )}

            <span className="report">
              <AiFillFlag />
              Báo cáo
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
