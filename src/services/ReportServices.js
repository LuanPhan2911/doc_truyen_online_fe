import axios from "../axios";
const handleCreateReportService = (data) => {
  return axios.post("api/reports/create", data);
};
export { handleCreateReportService };
