import { useEffect, useState } from "react";
import {
  handleEmailNotificationService,
  handleGetUserService,
} from "../../services/AuthServices";

const VerifyEmailForm = ({ handleCloseModal }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const handleGetUser = async () => {
      try {
        let res = await handleGetUserService();
        if (res?.success) {
          let { data } = res;
          setEmail(data?.email);
        }
      } catch (error) {}
    };
    handleGetUser();
  }, []);
  const handleVerifyEmailNotification = async () => {
    try {
      let res = await handleEmailNotificationService();
      if (!res?.success) {
        return;
      }
      handleCloseModal();
    } catch (error) {}
  };
  return (
    <>
      <div className="form-group py-2">
        <label>Nhập email của bạn</label>
        <input
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => handleVerifyEmailNotification()}
        >
          Gửi lại email
        </button>
      </div>
    </>
  );
};
export default VerifyEmailForm;
