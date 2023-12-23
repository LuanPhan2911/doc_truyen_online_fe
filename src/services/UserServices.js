import axios from "../axios";
const getUser = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};
const putUser = async (userId, data) => {
  return await axios.post(`/api/users/${userId}`, data);
};
const getStoriesReading = async () => {
  return axios.get(`api/users/stories`);
};
const getStoriesReadingPaginate = async (qs) => {
  return axios.get(`api/users/stories/reading/paginate`, {
    params: qs,
  });
};
const getStoriesMarkingPaginate = async (qs) => {
  return axios.get(`api/users/stories/marking/paginate`, {
    params: qs,
  });
};
const deleteStoryReading = async (storyId) => {
  return axios.delete(`api/users/stories/reading/${storyId}`);
};
const deleteStoryMarking = async (storyId) => {
  return axios.delete(`api/users/stories/marking/${storyId}`);
};
const getUserNotifies = async () => {
  return axios.get(`api/users/notifies`);
};
const putUserNotifies = async (storyId) => {
  return axios.post(`api/users/notifies/${storyId}`);
};
const postStoryMarking = async ({ slug, index }) => {
  return axios.get(`api/users/marking/${slug}/chapter/${index}`);
};
export {
  getUser,
  putUser,
  getStoriesReading,
  getUserNotifies,
  deleteStoryReading,
  getStoriesReadingPaginate,
  putUserNotifies,
  postStoryMarking,
  getStoriesMarkingPaginate,
  deleteStoryMarking,
};
