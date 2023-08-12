import { createContext, useState } from "react";
import Dialog from "../components/Dialog";
import LoginForm from "../containers/auth/LoginForm";
import RegisterForm from "../containers/auth/RegisterForm";
import VerifyEmailForm from "../containers/auth/VerifyEmailForm";
import ForgotPasswordForm from "../containers/auth/ForgotPasswordForm";

const DialogContext = createContext();
const menuDialog = [
  {
    id: "login",
    name: "",
    component: <LoginForm />,
  },
  {
    id: "register",
    name: "",
    component: <RegisterForm />,
  },
  {
    id: "verify-email",
    name: "",
    component: <VerifyEmailForm />,
  },
  {
    id: "forgot-password",
    name: "",
    component: <ForgotPasswordForm />,
  },
];
const DialogProvider = ({ children }) => {
  const [itemDialog, setItemDialog] = useState({
    id: "",
    name: "",
    component: "",
  });
  const [showDialog, setShowDialog] = useState(false);
  function handleShowDialog(itemId) {
    let obj = {};
    if (menuDialog?.length > 0) {
      obj = menuDialog.find((item) => item.id === itemId);
    }
    setShowDialog(true);
    setItemDialog({ ...obj });
  }
  function handleCloseDialog() {
    setShowDialog(false);
  }
  return (
    <DialogContext.Provider
      value={{
        handleShowDialog,
        handleCloseDialog,
        showDialog,
        setItemDialog,
        setShowDialog,
        itemDialog,
      }}
    >
      {children}
      <Dialog show={showDialog} onClose={handleCloseDialog}>
        <Dialog.Title>{itemDialog.name}</Dialog.Title>
        <Dialog.Body>{itemDialog.component}</Dialog.Body>
      </Dialog>
    </DialogContext.Provider>
  );
};
export default DialogProvider;
export { DialogContext };
