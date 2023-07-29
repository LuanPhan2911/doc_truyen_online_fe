import axios from "../axios";

const handleGetStoryService = (qs = {}) => {
  return axios.get("api/story", {
    params: qs,
  });
};
const handleShowStoryService = (id) => {
  return axios.get(`api/story/show/${id}`);
};
export { handleGetStoryService, handleShowStoryService };
