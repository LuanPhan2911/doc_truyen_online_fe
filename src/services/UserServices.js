import axios from "../axios";
const handleGetUser = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};
const handleUpdateUser = async (userId, data) => {
  return await axios.post(`/api/users/${userId}`, data);
};
const handleGetStoriesReadingService = async () => {
  return axios.get(`api/users/stories_reading`);
};
const handleDestroyStoriesReadingService = async (id) => {
  return axios.delete(`api/users/stories_reading/${id}`);
};
const handleGetNotifiesService = async (userId) => {
  return axios.get(`api/users/notifies/${userId}`);
};

export {
  handleGetUser,
  handleUpdateUser,
  handleGetStoriesReadingService,
  handleGetNotifiesService,
  handleDestroyStoriesReadingService,
};
