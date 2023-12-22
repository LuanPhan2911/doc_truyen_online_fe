import axios from "../axios";
const handleGetUser = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};
const handleUpdateUser = async (userId, data) => {
  return await axios.post(`/api/users/${userId}`, data);
};
const handleGetStoriesReadingService = async () => {
  return axios.get(`api/users/stories`);
};
const handleGetStoriesReadingPaginateService = async (qs) => {
  return axios.get(`api/users/stories/paginate`, {
    params: qs,
  });
};
const handleDestroyStoriesReadingService = async (storyId) => {
  return axios.delete(`api/users/stories/${storyId}`);
};
const handleGetNotifiesService = async () => {
  return axios.get(`api/users/notifies`);
};
const handleUpdateStoryNotifiesService = async (storyId) => {
  return axios.post(`api/users/notifies/${storyId}`);
};

export {
  handleGetUser,
  handleUpdateUser,
  handleGetStoriesReadingService,
  handleGetNotifiesService,
  handleDestroyStoriesReadingService,
  handleGetStoriesReadingPaginateService,
  handleUpdateStoryNotifiesService,
};
