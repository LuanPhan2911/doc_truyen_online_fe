import { useState } from "react";
import { handleResetPasswordService } from "../../services/AuthServices";

const ResetPasswordForm = ({ handleResetPassword }) => {
  const [user, setUser] = useState({
    password: "",
    passwordConfirm: "",
  });

  const handleChangeInputForm = (event, key) => {
    let useCopy = { ...user };
    useCopy[key] = event.target.value;
    setUser({ ...useCopy });
  };
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={user.password}
            onChange={(e) => handleChangeInputForm(e, "password")}
          />
        </div>
        <div className="form-group">
          <label>Nhap lai mat khau</label>
          <input
            type={"password"}
            className="form-control"
            value={user.confirmPassword}
            onChange={(e) => handleChangeInputForm(e, "passwordConfirm")}
          />
        </div>
        <div className="d-grid gap-2 my-1">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleResetPassword(user)}
          >
            Reset password
          </button>
        </div>
      </div>
    </>
  );
};
export default ResetPasswordForm;
