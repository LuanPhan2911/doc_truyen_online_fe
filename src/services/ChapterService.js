import axios from "../axios";

const handleGetChapterService = (name, chapterIndex) => {
  return axios.get(`/api/story/${name}/chapter/${chapterIndex}`);
};
const handleGetChapterListSlugService = (slug) => {
  return axios.get(`/api/story/${slug}/chapter`);
};
const handleChapterReactionService = ({ slug, index, name }) => {
  return axios.post(`/api/story/${slug}/chapter/${index}/reaction`, {
    name,
  });
};
export {
  handleGetChapterService,
  handleGetChapterListSlugService,
  handleChapterReactionService,
};
