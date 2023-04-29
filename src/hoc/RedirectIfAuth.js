import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectIfAuth = ({ children }) => {
  let user = useSelector((state) => state.auth.user);
  return user !== null ? children : <Navigate to={"/login"} />;
};
export default RedirectIfAuth;
