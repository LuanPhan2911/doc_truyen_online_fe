import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/AuthServices";
import { toast } from "react-toastify";
import { login } from "../../features/userSlice";
import "./LoginForm.scss";
import { handleClose, handleShow, setAuth } from "../../features/authSlice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const handleShowModal = (id) => dispatch(handleShow(id));
  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
  const handleRememberMe = () => {
    let cpUser = { ...user };
    cpUser.rememberMe = !cpUser.rememberMe;
    setUser({ ...cpUser });
  };
  const handleLogin = async () => {
    if (handleValidateForm(user)) {
      try {
        let res = await loginUser(user);
        if (res?.success) {
          toast.success("Đăng nhập thành công");
          let user = res.data;
          dispatch(login(user));
          setUser({
            email: "",
            password: "",
            rememberMe: false,
          });
          dispatch(setAuth(true));
          dispatch(handleClose());
        }
      } catch (error) {}
    }
  };

  return (
    <div className="login-form my-2">
      <div className="form-group py-2">
        <div className="d-flex justify-content-between">
          <label>Email</label>
          <div
            className="verify-email"
            onClick={() => handleShowModal("verify")}
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
            onClick={() => handleShowModal("forgot-password")}
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
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => handleRememberMe()}
          value={user.rememberMe}
          checked={user.rememberMe}
        />
        <label>Ghi nhớ tôi</label>
      </div>
      <div className="login">
        <button onClick={() => handleLogin()}>Đăng nhập</button>
      </div>
      <div className="no-account">
        Bạn chưa có tài khoản?{" "}
        <span onClick={() => handleShowModal("register")}>Đăng ký</span>{" "}
      </div>
    </div>
  );
};
export default LoginForm;
