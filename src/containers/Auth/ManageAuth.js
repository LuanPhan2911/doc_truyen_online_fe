import { useState } from "react";
import Modals from "../../components/Modals";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerifyEmailForm from "./VerifyEmailForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import {
  Title,
  TitleForgotPassword,
  TitleLoginSuccess,
  TitleVerifyEMail,
} from "./AuthTitle";
import { useDispatch, useSelector } from "react-redux";
import { handleShowModal } from "../../features/appSlice";
import { handleLogoutService } from "../../services/AuthServices";
import { handleLogoutRedux } from "../../features/authSlice";
import { toast } from "react-toastify";
const ManageAuth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const handleDynamicModal = (name) => {
    dispatch(handleShowModal());
    let copyShowData = showData;
    copyShowData =
      copyShowData?.length > 0 &&
      copyShowData.map((item, index) => {
        if (item["name"] === name) {
          item["isShow"] = true;
        } else {
          item["isShow"] = false;
        }
        return item;
      });
    setShowData([...copyShowData]);
  };
  const isActive = (name) => {
    let data =
      showData?.length > 0 &&
      showData.find((item) => {
        return item.name === name;
      });
    return data.isShow;
  };
  const [showData, setShowData] = useState([
    {
      name: "login",
      isShow: false,
      Title: (
        <Title isActive={isActive} handleDynamicModal={handleDynamicModal} />
      ),
      Element: <LoginForm handleDynamicModal={handleDynamicModal} />,
    },
    {
      name: "register",
      isShow: false,
      Title: (
        <Title isActive={isActive} handleDynamicModal={handleDynamicModal} />
      ),
      Element: <RegisterForm />,
    },
    {
      name: "verifyEmail",
      isShow: false,
      Title: <TitleVerifyEMail />,
      Element: <VerifyEmailForm />,
    },
    {
      name: "forgotPassword",
      isShow: false,
      Title: <TitleForgotPassword />,
      Element: <ForgotPasswordForm />,
    },
  ]);
  const handleLogout = async () => {
    try {
      let res = await handleLogoutService();
      if (res?.success) {
        dispatch(handleLogoutRedux());
        toast.success(res.message);
      }
    } catch (error) {}
  };

  return (
    <>
      {isAuth ? (
        <TitleLoginSuccess handleLogout={handleLogout} />
      ) : (
        <Title isActive={isActive} handleDynamicModal={handleDynamicModal} />
      )}

      <Modals size={"md"}>
        {showData?.length > 0 &&
          showData.find((item, index) => {
            return item.isShow === true;
          })}
      </Modals>
    </>
  );
};
export default ManageAuth;
