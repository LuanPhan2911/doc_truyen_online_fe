import axios from "../axios";
const handleSendCommentService = (data) => {
  return axios.post("/api/comments/create", data);
};
const handleGetCommentsService = (qs) => {
  return axios.get("/api/comments", {
    params: {
      ...qs,
    },
  });
};
const handleLikeCommentService = (commentId) => {
  return axios.post(`api/comments/${commentId}/like`);
};
const handleDeleteCommentService = (commentId) => {
  return axios.delete(`api/comments/${commentId}`);
};
export {
  handleSendCommentService,
  handleGetCommentsService,
  handleLikeCommentService,
  handleDeleteCommentService,
};
