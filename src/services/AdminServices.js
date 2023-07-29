import axios from "../axios";
const handleCreateStoryService = (data) => {
  return axios.post("/api/admin/story/create", data);
};
const handleUpdateStoryService = (data) => {
  return axios.post(`/api/admin/story/update/${data.id}`, data);
};
const handleGetStoryService = (qs) => {
  return axios.get("/api/admin/story/", {
    params: qs,
  });
};
export {
  handleCreateStoryService,
  handleGetStoryService,
  handleUpdateStoryService,
};
