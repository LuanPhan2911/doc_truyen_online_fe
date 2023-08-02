import axios from "../axios";
const handleCreateChapterService = (data) => {
  return axios.post("/api/admin/story/chapter/create", data);
};
const handleGetChapterService = (query) => {
  return axios.get(`/api/chapter/show`, {
    params: query,
  });
};
const handleGetChapterListService = (storyId) => {
  return axios.get(`api/story/${storyId}/chapter`);
};
export {
  handleCreateChapterService,
  handleGetChapterService,
  handleGetChapterListService,
};
