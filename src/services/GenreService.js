import axios from "../axios";

const getGenres = (params) => {
  return axios.get("/api/genres", {
    params: params,
  });
};
const postGenre = (data) => {
  return axios.post("/api/genres/create", data);
};
const putGenre = (id, data) => {
  return axios.post(`/api/genres/${id}/edit`, data);
};
const deleteGenre = (id) => {
  return axios.delete(`/api/genres/${id}/delete`);
};
export { getGenres, postGenre, putGenre, deleteGenre };
