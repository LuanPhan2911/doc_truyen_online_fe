import axios from "../axios";
const loginUser = (user) => {
  return axios.post("/api/login", user);
};

const logoutUser = () => {
  return axios.get("/api/logout");
};
const registerUser = (user) => {
  return axios.post("/api/register", user);
};
const getAuth = () => {
  return axios.get("/api/get_user");
};
const notifyEmailUser = () => {
  return axios.post("api/email/verification_notification");
};
const VerifyEmailUser = ({ id, hash, ...qs }) => {
  return axios.get(`api/email/verify/${id}/${hash}`, {
    params: {
      ...qs,
    },
  });
};
const forgotPasswordUser = (data) => {
  return axios.post("/api/forgot_password", data);
};
const resetPasswordUser = ({ email, token, ...data }) => {
  return axios.post(
    "/api/reset-password",
    { ...data },
    {
      params: {
        email: email,
        token: token,
      },
    }
  );
};
export {
  loginUser,
  logoutUser,
  registerUser,
  getAuth,
  notifyEmailUser,
  VerifyEmailUser,
  forgotPasswordUser,
  resetPasswordUser,
};
