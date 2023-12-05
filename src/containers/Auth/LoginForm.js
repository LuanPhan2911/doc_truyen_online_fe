import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginService } from "../../services/AuthServices";
import { toast } from "react-toastify";
import { userLogin } from "../../features/userSlice";
import "./LoginForm.scss";
import { Link } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
const LoginForm = () => {
  const dispatch = useDispatch();
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
        let res = await handleLoginService(user);
        if (res?.success) {
          toast.success("Đăng nhập thành công");
          let user = res.data;
          dispatch(userLogin(user));
          setUser({
            email: "",
            password: "",
            rememberMe: false,
          });
        }
      } catch (error) {}
    }
  };

  return (
    <HomeLayout>
      <div className="login-form">
        <div className="h3 text-center">Đăng nhập</div>
        <div className="form-group py-2">
          <div className="d-flex justify-content-between">
            <label>Email</label>
            <div className="verify-email">Gửi lại email kích hoạt</div>
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
            <div className="forgot-password">Quên mật khẩu?</div>
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
          Bạn chưa có tài khoản? <Link to={"/register"}>Đăng ký</Link>{" "}
        </div>
      </div>
    </HomeLayout>
  );
};
export default LoginForm;
