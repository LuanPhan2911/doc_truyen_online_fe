import axios from "../axios";
const postStory = (data) => {
  return axios.post("/api/admin/stories/create", data);
};
const putStory = (slug, data) => {
  return axios.post(`/api/admin/stories/${slug}/update`, data);
};
const getStories = (qs) => {
  return axios.get("/api/admin/stories", {
    params: qs,
  });
};
const getStory = (slug) => {
  return axios.get(`/api/admin/stories/${slug}/show`);
};
const putChapter = (slug, index, data) => {
  return axios.post(
    `/api/admin/stories/${slug}/chapters/${index}/update`,
    data
  );
};
const getChapter = (slug, chapterIndex) => {
  return axios.get(`/api/admin/stories/${slug}/chapters/${chapterIndex}`);
};
const postChapter = (slug, data) => {
  return axios.post(`/api/admin/stories/${slug}/chapters/create`, data);
};

const getAuthors = () => {
  return axios.get("/api/admin/authors");
};
const postAuthor = (data) => {
  return axios.post("/api/admin/authors/create", data);
};
export {
  postStory,
  getStories,
  putStory,
  putChapter,
  getChapter,
  postChapter,
  getStory,
  getAuthors,
  postAuthor,
};
