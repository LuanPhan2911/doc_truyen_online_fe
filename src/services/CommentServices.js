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
export { handleSendCommentService, handleGetCommentsService };
