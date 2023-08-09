import axios from "../axios";

const handleGetChapterService = (name, chapterIndex) => {
  return axios.get(`/api/story/${name}/chapter/${chapterIndex}`);
};
const handleGetChapterListService = (storyId) => {
  return axios.get(`api/story/${storyId}/chapter`);
};
export { handleGetChapterService, handleGetChapterListService };
