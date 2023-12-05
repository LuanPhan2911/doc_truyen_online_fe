import axios from "../axios";

const handleGetGenreService = (params) => {
  return axios.get("/api/genre", {
    params: params,
  });
};
const handleCreateGenreService = (data) => {
  return axios.post("/api/genre/create", data);
};
const handleUpdateGenreService = (id, data) => {
  return axios.put(`/api/genre/edit/${id}`, data);
};
const handleDeleteGenreService = (id) => {
  return axios.delete(`/api/genre/delete/${id}`);
};
export {
  handleGetGenreService,
  handleCreateGenreService,
  handleUpdateGenreService,
  handleDeleteGenreService,
};
