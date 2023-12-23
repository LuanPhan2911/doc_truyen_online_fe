import axios from "../axios";
const postComment = (data) => {
  return axios.post("/api/comments/create", data);
};
const getComments = (qs) => {
  return axios.get("/api/comments", {
    params: {
      ...qs,
    },
  });
};
const putLikeComment = (commentId) => {
  return axios.post(`api/comments/${commentId}/like`);
};
const deleteComment = (commentId) => {
  return axios.delete(`api/comments/${commentId}`);
};
export { postComment, getComments, putLikeComment, deleteComment };
