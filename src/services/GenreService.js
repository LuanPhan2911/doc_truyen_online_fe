import axios from "../axios";

const handleGetGenreService = (params) => {
  return axios.get("/api/genres", {
    params: params,
  });
};
const handleCreateGenreService = (data) => {
  return axios.post("/api/genres/create", data);
};
const handleUpdateGenreService = (id, data) => {
  return axios.post(`/api/genres/${id}/edit`, data);
};
const handleDeleteGenreService = (id) => {
  return axios.delete(`/api/genres/${id}/delete`);
};
export {
  handleGetGenreService,
  handleCreateGenreService,
  handleUpdateGenreService,
  handleDeleteGenreService,
};
