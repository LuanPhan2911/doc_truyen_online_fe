import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDialog } from "../hooks";
import { DialogContext } from "./DialogProvider";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const { showDialog } = useContext(DialogContext);
  const navigate = useNavigate();
  const { handleShowDialog } = useDialog();
  useEffect(() => {
    if (!isAuth) {
      handleShowDialog("login");
    }
  }, []);
  useEffect(() => {
    if (!isAuth && !showDialog) {
      navigate("/");
    }
  }, [showDialog]);

  return isAuth && children;
};
export default AuthProvider;
