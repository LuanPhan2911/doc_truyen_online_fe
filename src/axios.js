import axios from "axios";
import Cookies from "js-cookie";

// let token = Cookies.get("AUTH-TOKEN");
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const onRequest = (config) => {
  // If http method is `post | put | delete` and XSRF-TOKEN cookie is
  // not present, call '/sanctum/csrf-cookie' to set CSRF token, then
  // proceed with the initial response

  if (
    (config.method === "post" ||
      config.method === "put" ||
      config.method === "delete") &&
    /* other methods you want to add here */
    !Cookies.get("XSRF-TOKEN")
  ) {
    return setCSRFToken().then((response) => config);
  }
  return config;
};
const setCSRFToken = () => {
  return instance.get("/sanctum/csrf-cookie"); // resolves to '/api/csrf-cookie'.
};

instance.interceptors.request.use(onRequest, null);
instance.interceptors.response.use((response) => {
  return response.data;
});
export default instance;
