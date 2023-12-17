import axios from "../axios";

const handleGetStoryService = (qs = {}) => {
  return axios.get("api/story", {
    params: qs,
  });
};
const handleShowStoryService = (slug) => {
  return axios.get(`api/story/show/${slug}`);
};
const handleRateStoryService = (slug, data) => {
  return axios.post(`api/story/${slug}/rate`, data);
};
export {
  handleGetStoryService,
  handleShowStoryService,
  handleRateStoryService,
};
