import _ from "lodash";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Authenticate = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  return !_.isEmpty(token) ? children : <Navigate to="/login" replace={true} />;
};

export default Authenticate;
