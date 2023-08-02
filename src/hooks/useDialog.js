import { useContext } from "react";
import { DialogContext } from "../hoc/DialogProvider";

const useDialog = () => {
  const {
    handleShowDialog,
    handleCloseDialog,
    showDialog,
    setItemDialog,
    setShowDialog,
    itemDialog,
  } = useContext(DialogContext);
  return {
    handleShowDialog,
    handleCloseDialog,
    showDialog,
    setItemDialog,
    setShowDialog,
    itemDialog,
  };
};
export default useDialog;
