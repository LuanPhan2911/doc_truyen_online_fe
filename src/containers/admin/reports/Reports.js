import { useEffect, useState } from "react";
import "./Reports.scss";
import { handleGetReportsService } from "../../../services/ReportServices";
import { handleDeleteCommentService } from "../../../services/CommentServices";
import { toast } from "react-toastify";
const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReport() {
      try {
        let res = await handleGetReportsService({
          type: "comment",
        });
        if (res?.success) {
          let data = res.data;
          setReports([...data]);
        }
      } catch (error) {}
    }
    fetchReport();
  }, []);
  const handleDeleteComment = async (report) => {
    try {
      let res = await handleDeleteCommentService(report.reportable_id);
      if (res?.success) {
        let cpReports = [...reports];
        cpReports = cpReports.filter((item) => item.id !== report.id);

        setReports([...cpReports]);
        toast.success("Bình luận đã xóa thành công");
      }
    } catch (error) {}
  };
  return (
    <div className="admin-reports">
      <div className="reports-menu"></div>
      <div className="reports-table">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Nội dung tố cáo</th>
              <th>Nội dung bình luận</th>
              <th>Xóa bình luân</th>
            </tr>
          </thead>
          <tbody>
            {reports?.length > 0 &&
              reports.map((item) => {
                return (
                  <tr key={item?.id}>
                    <td>{item?.id}</td>
                    <td>{item?.message}</td>
                    <td>{item?.reportable?.message}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteComment(item)}
                      >
                        Xóa bình luận
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Reports;
