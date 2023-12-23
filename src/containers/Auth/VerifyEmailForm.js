import { useEffect, useState } from "react";
import { notifyEmailUser } from "../../services/AuthServices";
import { getUser } from "../../services/UserServices";

const VerifyEmailForm = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await getUser();
        if (res?.success) {
          let { data } = res;
          setEmail(data?.email);
        }
      } catch (error) {}
    };
    fetchUser();
  }, []);
  const handleVerifyEmailNotification = async () => {
    try {
      let res = await notifyEmailUser();
      if (!res?.success) {
        return;
      }
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
