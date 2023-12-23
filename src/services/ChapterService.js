import axios from "../axios";

const getChapter = (name, chapterIndex) => {
  return axios.get(`/api/stories/${name}/chapter/${chapterIndex}`);
};
const getChapterList = (slug) => {
  return axios.get(`/api/stories/${slug}/chapter`);
};
const postChapterReaction = ({ slug, index, name }) => {
  return axios.post(`/api/stories/${slug}/chapter/${index}/reaction`, {
    name,
  });
};
export { getChapter, getChapterList, postChapterReaction };
