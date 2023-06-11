import { useState } from "react";
import { handleRegisterService } from "../../services/AuthServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
      <div className="container-fluid d-flex justify-content-center row px-5">
        <div className="col-lg-4 col-sm-12">
          <div className="h3 text-center">Đăng ký</div>
          <div className=" form-group">
            <label>Email</label>
            <input
              type={"email"}
              className="form-control"
              value={user.email}
              onChange={(e) => handleChangeInputForm(e, "email")}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type={"password"}
              className="form-control"
              value={user.password}
              onChange={(e) => handleChangeInputForm(e, "password")}
            />
          </div>
          <div className="form-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type={"password"}
              className="form-control"
              value={user.confirmPassword}
              onChange={(e) => handleChangeInputForm(e, "confirmPassword")}
            />
          </div>
          <div className="d-flex justify-content-center my-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleRegister(user)}
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
