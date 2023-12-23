import { useState } from "react";

import { useQueryString } from "../../hooks";
import { resetPasswordUser } from "../../services/AuthServices";
import ResetPasswordForm from "./ResetPasswordForm";
const ResetPassword = ({ show }) => {
  const [isShown, setIsShown] = useState(show || false);
  const queryString = useQueryString();
  const handleClose = () => setIsShown(false);
  const handleResetPassword = async (user) => {
    let { token, email } = queryString;
    try {
      let res = await resetPasswordUser({
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
    <ResetPasswordForm
      queryString={queryString}
      handleResetPassword={handleResetPassword}
    />
  );
};
export default ResetPassword;
