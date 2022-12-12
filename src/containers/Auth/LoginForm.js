import { useState } from "react";
import Cookies from "js-cookie";
import { handleLoginService } from "../../services/AuthServices";
import { useDispatch } from "react-redux";
import { handleLoginRedux } from "../../features/user/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
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
        if (res && res.data) {
          let { token } = res.data;
          Cookies.set("AUTH-TOKEN", token);
          dispatch(handleLoginRedux(token));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="col-6 form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={user.email}
            onChange={(e) => handleChangeInputForm(e, "email")}
          />
        </div>
        <div className="col-6 form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={user.password}
            onChange={(e) => handleChangeInputForm(e, "password")}
          />
        </div>
        <div className="col-6 form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">Ghi nho tai khoan</label>
        </div>
        <div className="col-6 d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleLogin()}
          >
            Dang nhap
          </button>
        </div>

        <div className="np-account">
          <p>Ban chua co tai khoan</p>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
