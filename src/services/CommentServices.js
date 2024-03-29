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
export {
  handleSendCommentService,
  handleGetCommentsService,
  handleLikeCommentService,
};
