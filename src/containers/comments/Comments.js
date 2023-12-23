import { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comments.scss";
import { getComments } from "../../services/CommentServices";

const Comments = ({ storyId, isReply, replies, type = 0, storyRatings }) => {
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState("");

  useEffect(() => {
    if (isReply && replies?.length > 0) {
      setComments([...replies]);
    } else {
      storyId && fetchComment(storyId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId]);
  const handleSetNewComment = (comment, parent_id) => {
    let cpComments = [...comments];
    if (!parent_id) {
      setComments([comment, ...cpComments]);
    } else {
      cpComments.forEach((item) => {
        if (item.id === parent_id) {
          let { replies } = item;
          replies = [...replies, comment];
          item.replies_count += 1;
          item.replies = replies;
        }
      });

      setComments([...cpComments]);
    }
  };

  async function fetchComment(storyId, nextCursor = null) {
    try {
      let res = await getComments({
        story_id: storyId,
        cursor: nextCursor,
        type,
      });
      if (res?.success) {
        let { data, next_cursor } = res.data;
        setNextCursor(next_cursor);
        setComments([...comments, ...data]);
      }
    } catch (error) {}
  }
  const handleSeeMoreComments = () => {
    fetchComment(storyId, nextCursor);
  };
  return (
    <div className="comments">
      {!isReply && (
        <CommentForm
          storyId={storyId}
          handleSetNewComment={handleSetNewComment}
          type={type}
          storyRatings={storyRatings}
        />
      )}
      <div className="comments-list">
        {comments?.length > 0 &&
          comments.map((item) => {
            return (
              <Comment
                comment={item}
                key={item.id}
                isReply={isReply}
                handleSetNewComment={handleSetNewComment}
                type={type}
              />
            );
          })}
      </div>
      <div className="comments-see-more">
        {!isReply && nextCursor && (
          <button
            className="btn btn-success"
            onClick={() => handleSeeMoreComments()}
          >
            Xem thêm {type === 1 ? "đánh giá" : "bình luận"}
          </button>
        )}
      </div>
    </div>
  );
};
export default Comments;
