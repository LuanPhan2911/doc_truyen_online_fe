import { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comments.scss";
import { handleGetCommentsService } from "../../services/CommentServices";

const Comments = ({ storyId, isReply, replies }) => {
  const [comments, setComments] = useState([]);
  const [isSent, setIsSent] = useState(false);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if (isReply && replies?.length > 0) {
      setComments([...replies]);
    } else {
      fetchComment();
    }
  }, []);

  useEffect(() => {
    if (isSent) {
      fetchComment();
    }
    if (isReply && replies?.length > 0) {
      setComments([...replies]);
    }
  }, [isSent, replies]);
  async function fetchComment() {
    try {
      let res = await handleGetCommentsService({
        story_id: storyId,
      });
      if (res?.success) {
        let { data } = res.data;
        setComments([...data]);

        setIsSent(false);
      }
    } catch (error) {}
  }

  return (
    <div className="comments">
      <div className="comment-list">
        {!isReply && <CommentForm storyId={storyId} setIsSent={setIsSent} />}
        {comments?.length > 0 &&
          comments.map((item) => {
            return (
              <Comment
                comment={item}
                key={item.id}
                isReply={isReply}
                setIsSent={setIsSent}
              />
            );
          })}
      </div>
      <div className="other"></div>
    </div>
  );
};
export default Comments;
