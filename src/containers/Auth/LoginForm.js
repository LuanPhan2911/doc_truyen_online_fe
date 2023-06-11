import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginService } from "../../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      <div className="container-fluid d-flex justify-content-center row">
        <div className="col-lg-4 col-sm-12">
          <div className="h3 text-center">Đăng nhập</div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <label>Email</label>
              <button className="btn-verify-email">
                Gửi lại email kích hoạt
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
            <div className="d-flex justify-content-between">
              <label>Password</label>
              <button
                className="btn-forgot-password"
                onClick={() => handleDynamicModal("forgotPassword")}
              >
                Quên mật khẩu?
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
            <label className="form-check-label">Ghi nhớ tài khoản</label>
          </div>
          <div className="d-flex justify-content-center my-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleLogin()}
            >
              Đăng nhập
            </button>
          </div>
          <div className="np-account">
            <p>
              Bạn chưa có tài khoản?{" "}
              <Link to={"/register"} className="btn-register">
                Đăng kí ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
