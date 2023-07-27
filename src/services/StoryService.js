import axios from "../axios";

const handleCreateStoryService = (data) => {
  return axios.post("/api/story/create", data);
};
const handleGetStoryService = (qs = {}) => {
  return axios.get("api/story", {
    params: qs,
  });
};

export { handleCreateStoryService, handleGetStoryService };
