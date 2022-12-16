import axios from "../axios";
const handleLoginService = (user) => {
  return axios.post("/api/login", user);
};

const handleLogoutService = () => {
  return axios.get("/api/logout");
};
// const handleGetUserService = () => {
//   return axios.get("/api/user");
// };
export { handleLoginService, handleLogoutService };
