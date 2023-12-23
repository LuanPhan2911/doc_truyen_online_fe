import { useState } from "react";
import { registerUser } from "../../services/AuthServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import "./RegisterForm.scss";
import { handleErrorApiResponse } from "../../utils/Helper";
import { handleClose, handleShow } from "../../features/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleShowModal = (id) => dispatch(handleShow(id));
  const initUser = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState({ ...initUser });

  const handleChangeInputForm = (event, key) => {
    let useCopy = { ...user };
    useCopy[key] = event.target.value;
    setUser({ ...useCopy });
  };
  const handleValidateForm = (user) => {
    let { name, email, password, confirmPassword } = user;
    if (!email || !password || !confirmPassword || !name) {
      return false;
    }
    return true;
  };
  const handleRegister = async (user) => {
    if (!handleValidateForm(user)) {
      return;
    }
    try {
      let res = await registerUser(user);

      if (res?.success) {
        toast.success("Đăng ký thành công!");
        toast.warning("Bạn cần phải xác nhận email để đăng nhập!");
        dispatch(handleClose());
      }
    } catch (error) {
      handleErrorApiResponse(error);
    }
  };
  return (
    <div className="register-form my-2">
      <div className="form-group">
        <label>Tên hiển thị</label>
        <input
          type={"text"}
          className="form-control"
          value={user.name}
          onChange={(e) => handleChangeInputForm(e, "name")}
          placeholder="Nhập tên hiển thị"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type={"email"}
          className="form-control"
          value={user.email}
          onChange={(e) => handleChangeInputForm(e, "email")}
          placeholder="Nhập email"
        />
      </div>
      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type={"password"}
          className="form-control"
          value={user.password}
          onChange={(e) => handleChangeInputForm(e, "password")}
          placeholder="Nhập mật khẩu"
        />
      </div>
      <div className="form-group">
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
      <div className="no-account">
        Bạn có tài khoản?{" "}
        <span onClick={() => handleShowModal("login")}>Đăng nhập</span>{" "}
      </div>
    </div>
  );
};
export default RegisterForm;
