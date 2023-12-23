import { AiFillFlag, AiOutlineFieldTime } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import avatarDefault from "../../assets/avatar/default.png";
import "./Comment.scss";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { asset, diffTime } from "../../utils/Helper";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import { putLikeComment } from "../../services/CommentServices";
import { Modal } from "react-bootstrap";
import ReportForm from "../reports/ReportForm";
import StarRatings from "react-star-ratings";
import _ from "lodash";
const Comment = ({
  comment: commentProps,
  isReply,
  handleSetNewComment,
  type,
}) => {
  const [comment, setComment] = useState({});
  const [replies, setReplies] = useState([]);
  const [user, setUser] = useState({});
  const [showInput, setShowInput] = useState(false);
  const [showRelies, setShowRelies] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);
  const [repliesCounter, setRepliesCounter] = useState(0);
  const isAuth = useSelector((state) => state.user.isAuth);
  const [showReport, setShowReport] = useState(false);
  const [isLeak, setLeak] = useState(false);
  const [rateStory, setRateStory] = useState({});
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
      is_leak,
      rate_story,
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
    setLeak(is_leak);

    if (!_.isEmpty(rate_story)) {
      setRateStory(rate_story);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentProps, commentProps?.replies]);

  const handleReply = () => {
    setShowInput(!showInput);
  };

  const handleLikeComment = async (commentId) => {
    if (isAuth) {
      try {
        let res = await putLikeComment(commentId);
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
    if (isAuth) {
      setShowReport(true);
    }
  };
  const rateValue = Object.values(rateStory) || [];
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
            <div className="user-name">{user.name}</div>
            <div className="row">
              {type === 1 && (
                <div className="star col-lg-6">
                  <StarRatings
                    rating={_.mean(rateValue) || 0}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="2px"
                  />
                  <span className="fs-small">{_.mean(rateValue) || 0}</span>
                </div>
              )}

              <div className="time col-lg-6">
                <AiOutlineFieldTime size={"1.5em"} />
                {diffTime(comment?.created_at)}
              </div>
            </div>
          </div>
          <div className="comment-content">
            {isLeak ? (
              <div
                className="comment-leak bg-primary p-3 text-center pointer"
                onClick={() => setLeak(false)}
              >
                Tiết lộ nội dung cốt truyện
              </div>
            ) : (
              comment.message
            )}
          </div>
          {replies?.length > 0 && (
            <div className="comment-replies">
              {!showRelies ? (
                <span onClick={() => setShowRelies(true)}>
                  Xem {repliesCounter} trả lời
                </span>
              ) : (
                <>
                  <Comments isReply={true} replies={replies} type={type} />
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
              type={type}
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
