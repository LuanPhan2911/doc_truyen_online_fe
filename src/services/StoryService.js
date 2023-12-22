import axios from "../axios";

const handleGetStoryService = (qs = {}) => {
  return axios.get("api/stories", {
    params: qs,
  });
};
const handleShowStoryService = (slug) => {
  return axios.get(`api/stories/${slug}`);
};
const handleRateStoryService = (slug, data) => {
  return axios.post(`api/stories/${slug}/rate`, data);
};

export {
  handleGetStoryService,
  handleShowStoryService,
  handleRateStoryService,
};
