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
const handleUpdateChapterService = (data, chapterId) => {
  return axios.post(`/api/admin/story/chapter/${chapterId}`, data);
};
const handleShowChapterService = (storyId, chapterIndex) => {
  return axios.get(`/api/admin/story/${storyId}/chapter/${chapterIndex}`);
};
const handleCreateChapterService = (data, slug) => {
  return axios.post(`/api/admin/story/${slug}/chapter/create`, data);
};
export {
  handleCreateStoryService,
  handleGetStoryService,
  handleUpdateStoryService,
  handleUpdateChapterService,
  handleShowChapterService,
  handleCreateChapterService,
};
