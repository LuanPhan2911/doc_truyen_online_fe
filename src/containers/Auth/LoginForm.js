import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginService } from "../../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./LoginForm.scss";
const LoginForm = ({ handleShowDialog }) => {
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
      try {
        let res = await handleLoginService(user);
        if (res?.success) {
          toast.success("Login sucesss");
          navigate("/");
        }
      } catch (error) {}
    }
  };

  return (
    <>
      <div className="login-form">
        <div className="h3 text-center">Đăng nhập</div>
        <div className="form-group py-2">
          <div className="d-flex justify-content-between">
            <label>Email</label>
            <div
              className="verify-email"
              onClick={() => handleShowDialog("verify-email")}
            >
              Gửi lại email kích hoạt
            </div>
          </div>
          <input
            type={"email"}
            className="form-control"
            value={user.email}
            onChange={(e) => handleChangeInputForm(e, "email")}
            placeholder="Nhập email"
          />
        </div>
        <div className="form-group py-2">
          <div className="d-flex justify-content-between">
            <label>Password</label>
            <div
              className="forgot-password"
              onClick={() => handleShowDialog("forgot-password")}
            >
              Quên mật khẩu?
            </div>
          </div>
          <input
            type={"password"}
            className="form-control"
            value={user.password}
            onChange={(e) => handleChangeInputForm(e, "password")}
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className="login">
          <button onClick={() => handleLogin()}>Đăng nhập</button>
        </div>
        <div className="no-account">
          Bạn chưa có tài khoản?{" "}
          <span onClick={() => handleShowDialog("register")}>Đăng ký ngay</span>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
