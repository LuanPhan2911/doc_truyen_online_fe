import { useState } from "react";
import { handleRegisterService } from "../../services/AuthServices";
const RegisterForm = () => {
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
        console.log(res);
      }
    }
  };
  return (
    <>
      <div className="container d-flex flex-column">
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
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={user.password}
            onChange={(e) => handleChangeInputForm(e, "password")}
          />
        </div>
        <div className="form-group">
          <label>Nhap lai mat khau</label>
          <input
            type={"password"}
            className="form-control"
            value={user.confirmPassword}
            onChange={(e) => handleChangeInputForm(e, "confirmPassword")}
          />
        </div>
        <div className="d-grid gap-2 my-1">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleRegister(user)}
          >
            Dang ky
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
