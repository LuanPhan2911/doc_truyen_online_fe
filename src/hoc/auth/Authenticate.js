import _ from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Authenticate = ({ children }) => {
  const authInfo = useSelector((state) => state.authenticate);
  const navigate = useNavigate();
  //TODO: check login
  // if user not authenticate reuturn login form
  useEffect(() => {
    if (!authInfo?.isAuth) {
      navigate("/");
      return;
    }
  }, [authInfo]);
  return children;
};

export default Authenticate;
