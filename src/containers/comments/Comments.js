import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Comments.scss";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comment-list">
        <CommentForm />
        <Comment />
      </div>
      <div className="other"></div>
    </div>
  );
};
export default Comments;
