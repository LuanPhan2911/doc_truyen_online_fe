import axios from "../axios";
const handleCreateStoryService = (data) => {
  return axios.post("/api/admin/stories/create", data);
};
const handleUpdateStoryService = (data) => {
  return axios.post(`/api/admin/stories/${data.id}/update`, data);
};
const handleGetStoryService = (qs) => {
  return axios.get("/api/admin/stories", {
    params: qs,
  });
};
const handleShowStoryService = (id) => {
  return axios.get(`/api/admin/stories/${id}/show`);
};
const handleUpdateChapterService = (data, chapterId) => {
  return axios.post(`/api/admin/stories/chapters/${chapterId}`, data);
};
const handleShowChapterService = (storyId, chapterIndex) => {
  return axios.get(`/api/admin/stories/${storyId}/chapters/${chapterIndex}`);
};
const handleCreateChapterService = (data, id) => {
  return axios.post(`/api/admin/stories/${id}/chapters/create`, data);
};
const handleGetChapterListIdService = (id) => {
  return axios.get(`/api/admin/stories/${id}/chapters`);
};
const handleGetAuthorsService = () => {
  return axios.get("/api/admin/authors");
};
const handleCreateAuthorsService = (data) => {
  return axios.post("/api/admin/authors/create", data);
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
  handleGetAuthorsService,
  handleCreateAuthorsService,
};
