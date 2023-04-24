import axios from "../axios";
const handleCreateChapterService = (data) => {
  return axios.post("/api/chapter/create", data);
};
const handleGetChapterService = (query) => {
  return axios.get(`/api/chapter/show`, {
    params: query,
  });
};
export { handleCreateChapterService, handleGetChapterService };
