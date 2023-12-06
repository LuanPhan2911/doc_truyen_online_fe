import axios from "../axios";
const handleGetUser = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};
const handleUpdateUser = async (userId, data) => {
  return await axios.post(`/api/users/${userId}`, data);
};
// const handleGetStoriesService = async (userId) => {
//   return axios.get(`api/users/stories/${userId}`);
// };
// const handleGetNotifiesService = async (userId) => {
//   return axios.get(`api/users/notifies/${userId}`);
// };

export {
  handleGetUser,
  handleUpdateUser,
  // handleGetStoriesService,
  // handleGetNotifiesService,
};
