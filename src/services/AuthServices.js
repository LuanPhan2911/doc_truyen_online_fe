import axios from "../axios";
const handleLoginService = (user) => {
  return axios.post("/api/login", user);
};

const handleLogoutService = () => {
  return axios.get("/api/logout");
};
const handleRegisterService = (user) => {
  return axios.post("/api/register", user);
};
const handleGetUserService = () => {
  return axios.get("/api/get-user");
};
const handleEmailNotificationService = () => {
  return axios.post("api/email/verification-notification");
};
const handleVerifyEmailService = ({ id, hash, ...qs }) => {
  return axios.get(`api/email/verify/${id}/${hash}`, {
    params: {
      ...qs,
    },
  });
};
const handleForgotPasswordService = (data) => {
  return axios.post("/api/forgot-password", data);
};
const handleResetPasswordService = ({ email, token, ...data }) => {
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
  handleLoginService,
  handleLogoutService,
  handleRegisterService,
  handleGetUserService,
  handleEmailNotificationService,
  handleVerifyEmailService,
  handleForgotPasswordService,
  handleResetPasswordService,
};
