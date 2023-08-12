import axios from "../axios";
const handleGetUser = async (userId) => {
  return await axios.get(`/api/users/${userId}`);
};
const handleUpdateUser = async (userId, data) => {
  return await axios.post(`/api/users/${userId}`, data);
};

export { handleGetUser, handleUpdateUser };
