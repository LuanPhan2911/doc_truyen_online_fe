import { useState } from "react";
import { forgotPasswordUser } from "../../services/AuthServices";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const handleForgotPassword = async () => {
    try {
      let res = await forgotPasswordUser({
        email: email,
      });
      if (res?.success) {
      }
    } catch (error) {}
  };
  return (
    <div className="form-group">
      <label>Nhập email</label>
      <input
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={() => handleForgotPassword()}
        >
          Gửi mật khẩu
        </button>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
