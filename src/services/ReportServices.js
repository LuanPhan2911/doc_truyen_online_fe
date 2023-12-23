import axios from "../axios";
const postReport = (data) => {
  return axios.post("api/reports/create", data);
};
const getReports = (qs) => {
  return axios.get("api/reports", {
    params: qs,
  });
};
export { postReport, getReports };
