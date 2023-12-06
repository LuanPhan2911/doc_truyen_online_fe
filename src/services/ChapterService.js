import axios from "../axios";

const handleGetChapterService = (name, chapterIndex) => {
  return axios.get(`/api/story/${name}/chapter/${chapterIndex}`);
};
const handleGetChapterListService = (slug) => {
  return axios.get(`/api/story/${slug}/chapter`);
};
export { handleGetChapterService, handleGetChapterListService };
