import axios from "../axios";

const handleCreateStoryService = (data) => {
  return axios.post("/api/story/create", data);
};
const handleGetStoryService = () => {
  return axios.get("api/story");
};

export { handleCreateStoryService, handleGetStoryService };
