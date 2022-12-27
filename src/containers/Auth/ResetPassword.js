import { useState } from "react";
import { Navigate } from "react-router-dom";
import Modals from "../../components/Modals";
import Notify from "../../components/Notify";
import { useQueryString } from "../../hooks/useQueryString";
import { handleResetPasswordService } from "../../services/AuthServices";
import ResetPasswordForm from "./ResetPasswordForm";
const ResetPassword = ({ show }) => {
  const [isShown, setIsShown] = useState(show || false);
  const queryString = useQueryString();
  const handleClose = () => setIsShown(false);
  const handleResetPassword = async (user) => {
    let { token, email } = queryString;
    try {
      let res = await handleResetPasswordService({
        email,
        token,
        ...user,
      });
      if (res?.success) {
        handleClose();
      }
    } catch (error) {}
  };
  return (
    <Modals isShown={isShown} handleClose={handleClose} size={"md"}>
      {{
        Title: "Reset password",
        Element: (
          <ResetPasswordForm
            queryString={queryString}
            handleResetPassword={handleResetPassword}
          />
        ),
      }}
    </Modals>
  );
};
export default ResetPassword;
