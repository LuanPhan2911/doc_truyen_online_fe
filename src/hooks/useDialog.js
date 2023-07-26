import { useContext } from "react";
import { DialogContext } from "../hoc/DialogProvider";

const useDialog = () => {
  const { handleShowDialog, handleCloseDialog } = useContext(DialogContext);
  return [handleShowDialog, handleCloseDialog];
};
export default useDialog;
