import axios from "../axios";
const handleCreateStoryService = (data) => {
  return axios.post("/api/admin/story/create", data);
};
const handleUpdateStoryService = (data) => {
  return axios.post(`/api/admin/story/update/${data.id}`, data);
};
const handleGetStoryService = (qs) => {
  return axios.get("/api/admin/story/");
};
const handleShowStoryService = (id) => {
  return axios.get(`/api/admin/story/${id}`);
};
const handleUpdateChapterService = (data, chapterId) => {
  return axios.post(`/api/admin/story/chapter/${chapterId}`, data);
};
const handleShowChapterService = (storyId, chapterIndex) => {
  return axios.get(`/api/admin/story/${storyId}/chapter/${chapterIndex}`);
};
const handleCreateChapterService = (data, id) => {
  return axios.post(`/api/admin/story/${id}/chapter/create`, data);
};
const handleGetChapterListIdService = (id) => {
  return axios.get(`/api/admin/story/${id}/chapter`);
};
export {
  handleCreateStoryService,
  handleGetStoryService,
  handleUpdateStoryService,
  handleUpdateChapterService,
  handleShowChapterService,
  handleCreateChapterService,
  handleShowStoryService,
  handleGetChapterListIdService,
};
