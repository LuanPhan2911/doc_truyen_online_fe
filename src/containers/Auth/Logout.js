import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
import { handleLoginRedux } from "../../features/user/authSlice";
import { handleLogoutService } from "../../services/AuthServices";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    let res = await handleLogoutService();
    if (res && res.data) {
      dispatch(handleLoginRedux());
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return <button onClick={() => handleLogout()}>Logout</button>;
};
export default Logout;
