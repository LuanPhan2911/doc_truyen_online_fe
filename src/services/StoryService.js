import axios from "../axios";

const handleGetStoryService = (qs = {}) => {
  return axios.get("api/story", {
    params: qs,
  });
};
const handleShowStoryService = (slug) => {
  return axios.get(`api/story/show/${slug}`);
};
export { handleGetStoryService, handleShowStoryService };
