import axios from "../axios";

const getStories = (qs = {}) => {
  return axios.get("api/stories", {
    params: qs,
  });
};
const getStory = (slug) => {
  return axios.get(`api/stories/${slug}`);
};
const postRateStory = (slug, data) => {
  return axios.post(`api/stories/${slug}/rate`, data);
};
const getAuthorStories = (slug) => {
  return axios.get(`api/authors/${slug}/show`);
};

export { getStories, getStory, postRateStory, getAuthorStories };
