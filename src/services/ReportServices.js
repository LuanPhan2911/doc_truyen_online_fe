import axios from "../axios";
const handleCreateReportService = (data) => {
  return axios.post("api/reports/create", data);
};
const handleGetReportsService = (qs) => {
  return axios.get("api/reports", {
    params: qs,
  });
};
export { handleCreateReportService, handleGetReportsService };
