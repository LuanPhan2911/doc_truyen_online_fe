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
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={() => handleVerifyEmailNotification()}
        >
          Gui lai email
        </button>
      </div>
    </div>
  );
};
export default VerifyEmailForm;
