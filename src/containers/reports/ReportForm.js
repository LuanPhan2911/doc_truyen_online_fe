import { useState } from "react";
import { useSelector } from "react-redux";
import { checkPropertiesIsEmpty } from "../../utils/Helper";
import { handleCreateReportService } from "../../services/ReportServices";
import { toast } from "react-toastify";

const ReportForm = ({ reportedId, type }) => {
  const userId = useSelector((state) => state.user.id);
  const initReport = {
    user_id: userId,
    reportedId,
    type,
    message: "",
  };
  const [report, setReport] = useState({
    ...initReport,
  });
  const handleChangeInput = (e, name) => {
    let cpReport = { ...report };
    cpReport[name] = e.target.value;
    setReport({ ...cpReport });
  };
  const handleSendReport = async () => {
    if (!checkPropertiesIsEmpty(report)) {
      try {
        let res = await handleCreateReportService(report);
        if (res?.success) {
          toast.success("Gửi thành công");
          setReport({ ...initReport });
        }
      } catch (error) {}
    }
  };
  return (
    <div className="container">
      <div className="form-group">
        <label>Nội dung báo cáo:</label>
        <input
          type="text"
          className="form-control"
          value={report.message}
          onChange={(e) => handleChangeInput(e, "message")}
        />
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button className="btn btn-primary" onClick={() => handleSendReport()}>
          Gửi
        </button>
      </div>
    </div>
  );
};
export default ReportForm;
