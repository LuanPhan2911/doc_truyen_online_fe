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
import { useSelector } from "react-redux";
import useDialog from "../../hooks/useDialog";
import { handleLikeCommentService } from "../../services/CommentServices";
import { Modal } from "react-bootstrap";
import ReportForm from "../reports/ReportForm";
const Comment = ({ comment: commentProps, isReply, handleSetNewComment }) => {
  const [comment, setComment] = useState({});
  const [replies, setReplies] = useState([]);
  const [user, setUser] = useState({});
  const [showInput, setShowInput] = useState(false);
  const [showRelies, setShowRelies] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);
  const [repliesCounter, setRepliesCounter] = useState(0);
  const isAuth = useSelector((state) => state.user.isAuth);
  const { handleShowDialog } = useDialog();
  const [showReport, setShowReport] = useState(false);
  useEffect(() => {
    let {
      user,
      like_counter,
      id,
      parent_id,
      commentable_id,
      message,
      created_at,
      replies_count,
    } = commentProps;

    setRepliesCounter(replies_count);
    if (!isReply) {
      let { replies } = commentProps;
      setReplies([...replies]);
    }
    if (like_counter) {
      setLikeCounter(like_counter.count);
    }
    setUser({ ...user });
    setComment({
      id,
      parent_id,
      commentable_id,
      message,
      created_at,
    });
  }, [commentProps, commentProps?.replies]);

  const handleReply = () => {
    setShowInput(!showInput);
  };
  const handleCheckLogin = () => {
    if (!isAuth) {
      handleShowDialog("login");
    }
  };
  const handleLikeComment = async (commentId) => {
    handleCheckLogin();
    if (isAuth) {
      try {
        let res = await handleLikeCommentService(commentId);
        if (res?.success) {
          let message = res.data;
          if (message === "like") {
            setLikeCounter((likeCounter) => likeCounter + 1);
          } else {
            setLikeCounter((likeCounter) => likeCounter - 1);
          }
        }
      } catch (error) {}
    }
  };
  const handleReportComment = () => {
    handleCheckLogin();
    if (isAuth) {
      setShowReport(true);
    }
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
          <div className="comment-info">
            <span className="user-name">{user.name}</span>
            <span className="time">
              <AiOutlineFieldTime size={"1.5em"} />
              {diffTime(comment?.created_at)}
            </span>
          </div>
          <div className="comment-content">{comment.message}</div>
          {replies?.length > 0 && (
            <div className="comment-replies">
              {!showRelies ? (
                <span onClick={() => setShowRelies(true)}>
                  Xem {repliesCounter} trả lời
                </span>
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
              storyId={comment.commentable_id}
              handleSetNewComment={handleSetNewComment}
            />
          )}
          <div className="comment-report">
            <span
              className="like"
              onClick={() => handleLikeComment(comment.id)}
            >
              <BiLike />
              <span> {`Like ${likeCounter}`}</span>
            </span>
            {!isReply && (
              <span className="reply" onClick={() => handleReply()}>
                <BsReply />
                <span>{showInput ? "Đóng" : "Trả lời"}</span>
              </span>
            )}

            <span className="report" onClick={() => handleReportComment()}>
              <AiFillFlag />
              <span> Báo cáo</span>
            </span>
          </div>
        </div>
      </div>
      <Modal show={showReport} onHide={() => setShowReport(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Báo cáo bình luận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {<ReportForm type={"comment"} reportedId={comment?.id} />}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Comment;
