import { useState } from "react";
import Modals from "../../components/Modals";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerifyEmailForm from "./VerifyEmailForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Title, TitleForgotPassword, TitleVerifyEMail } from "./AuthTitle";
import "./Auth.scss";
const ManageAuth = () => {
  const handleDynamicModal = (name) => {
    handleShowModal();
    let copyIsShowData = isShowData;
    copyIsShowData =
      copyIsShowData?.length > 0 &&
      copyIsShowData.map((item, index) => {
        if (item["name"] === name) {
          item["isShow"] = true;
        } else {
          item["isShow"] = false;
        }
        return item;
      });
    setIsShowData([...copyIsShowData]);
  };
  const isActive = (name) => {
    let data =
      isShowData?.length > 0 &&
      isShowData.find((item) => {
        return item.name === name;
      });
    return data.isShow;
  };
  const [isShownModal, setIsShownModal] = useState(false);
  const handleShowModal = () => setIsShownModal(true);
  const handleCloseModal = () => {
    setIsShownModal(false);
  };
  const [isShowData, setIsShowData] = useState([
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
      Element: <VerifyEmailForm handleCloseModal={handleCloseModal} />,
    },
    {
      name: "forgotPassword",
      isShow: false,
      Title: <TitleForgotPassword />,
      Element: <ForgotPasswordForm />,
    },
  ]);

  return (
    <>
      <Title isActive={isActive} handleDynamicModal={handleDynamicModal} />
      <Modals
        isShown={isShownModal}
        handleClose={handleCloseModal}
        handleShow={handleShowModal}
        size={"md"}
      >
        {isShowData?.length > 0 &&
          isShowData.find((item, index) => {
            return item.isShow === true;
          })}
      </Modals>
    </>
  );
};
export default ManageAuth;
