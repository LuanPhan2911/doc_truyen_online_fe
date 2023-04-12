import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleLoginService } from "../../services/AuthServices";
import { handleLoginRedux } from "../../features/authSlice";
import { handleCloseModal } from "../../features/appSlice";
const LoginForm = ({ handleDynamicModal }) => {
  const dispatch = useDispatch();
  // const authenSelector = useSelector((state) => state.authenticate);
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
        console.log(res);
        if (res?.success) {
          dispatch(handleLoginRedux());
          dispatch(handleCloseModal());
          toast.success(res.message);
        }
      } catch (error) {}
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
