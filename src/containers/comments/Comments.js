import { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comments.scss";
import { handleGetCommentsService } from "../../services/CommentServices";

const Comments = ({ storyId, isReply, replies }) => {
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState("");

  useEffect(() => {
    if (isReply && replies?.length > 0) {
      setComments([...replies]);
    } else {
      storyId && fetchComment(storyId);
    }
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
      let res = await handleGetCommentsService({
        story_id: storyId,
        cursor: nextCursor,
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
            Xem thêm bình luận
          </button>
        )}
      </div>
    </div>
  );
};
export default Comments;
