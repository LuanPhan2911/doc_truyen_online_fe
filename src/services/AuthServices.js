import axios from "../axios";
const handleLoginService = (user) => {
  return axios.post("/api/login", user);
};

const handleLogoutService = () => {
  return axios.get("/api/logout");
};
export { handleLoginService, handleLogoutService };
