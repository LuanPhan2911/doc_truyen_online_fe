import { useState } from "react";
import { handleRegisterService } from "../../services/AuthServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.scss";
const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeInputForm = (event, key) => {
    let useCopy = { ...user };
    useCopy[key] = event.target.value;
    setUser({ ...useCopy });
  };
  const handleValidateForm = (user) => {
    let { email, password, confirmPassword } = user;
    if (!email || !password || !confirmPassword) {
      return false;
    }
    return true;
  };
  const handleRegister = async (user) => {
    if (handleValidateForm(user)) {
      let res = await handleRegisterService(user);
      if (res?.success) {
        toast.success("Register sucesss");
        navigate("/");
      }
    }
  };
  return (
    <>
      <div className="register-form">
        <div className="h3 text-center">Đăng ký</div>
        <div className="form-group py-2">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={user.email}
            onChange={(e) => handleChangeInputForm(e, "email")}
            placeholder="Nhập email"
          />
        </div>
        <div className="form-group py-2">
          <label>Mật khẩu</label>
          <input
            type={"password"}
            className="form-control"
            value={user.password}
            onChange={(e) => handleChangeInputForm(e, "password")}
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className="form-group py-2">
          <label>Nhập lại mật khẩu</label>
          <input
            type={"password"}
            className="form-control"
            value={user.confirmPassword}
            onChange={(e) => handleChangeInputForm(e, "confirmPassword")}
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <div className="register">
          <button onClick={() => handleRegister(user)}>Đăng kí</button>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
