import axios from "../axios";

const handleGetChapterService = (name, chapterIndex) => {
  return axios.get(`/api/stories/${name}/chapter/${chapterIndex}`);
};
const handleGetChapterListSlugService = (slug) => {
  return axios.get(`/api/stories/${slug}/chapter`);
};
const handleChapterReactionService = ({ slug, index, name }) => {
  return axios.post(`/api/stories/${slug}/chapter/${index}/reaction`, {
    name,
  });
};
export {
  handleGetChapterService,
  handleGetChapterListSlugService,
  handleChapterReactionService,
};
