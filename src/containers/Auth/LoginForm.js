import { useState } from "react";
import { handleLoginService } from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleDynamicModal }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChangeInputForm = (event, key) => {
    let useCopy = { ...user };
    useCopy[key] = event.target.value;
    setUser({ ...useCopy });
  };
  const handleValidateForm = (user) => {
    let { email, password } = user;
    if (!email || !password) {
      return false;
    }
    return true;
  };
  const handleLogin = async () => {
    if (handleValidateForm(user)) {
      let res = await handleLoginService(user);
      console.log(res);
    }
  };
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="form-group">
          <div className="d-flex justify-content-md-between">
            <label>Email</label>
            <button
              className="btn-verify-email"
              onClick={() => handleDynamicModal("verifyEmail")}
            >
              Gui lai email kich hoat
            </button>
          </div>
          <input
            type={"email"}
            className="form-control"
            value={user.email}
            onChange={(e) => handleChangeInputForm(e, "email")}
          />
        </div>
        <div className="form-group">
          <div className="d-flex justify-content-md-between">
            <label>Password</label>
            <button
              className="btn-forgot-password"
              onClick={() => handleDynamicModal("forgotPassword")}
            >
              Quen mat khau?
            </button>
          </div>
          <input
            type={"password"}
            className="form-control"
            value={user.password}
            onChange={(e) => handleChangeInputForm(e, "password")}
          />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">Ghi nho tai khoan</label>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleLogin()}
          >
            Dang nhap
          </button>
        </div>

        <div className="np-account">
          <p>
            Ban chua co tai khoan?{" "}
            <button
              className="btn-register"
              onClick={() => handleDynamicModal("register")}
            >
              Dang ky ngay
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
