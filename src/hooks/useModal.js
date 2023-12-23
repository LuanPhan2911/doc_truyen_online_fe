import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleShow as handleShowModal } from "../features/authSlice";
import { toast } from "react-toastify";
const useModal = ({ isShow, setShow, menu }) => {
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  const handleShow = (id, isAuth = true) => {
    if (!isAuth) {
      toast.warning("Bạn cần đăng nhập để thực hiện chức năng này!");
      dispatch(handleShowModal("login"));
      return;
    }
    let selectedItem = menu.find((item) => item.id === id);
    if (selectedItem?.isDoesntShow) {
      selectedItem?.fn();
    } else {
      setShow(true);
    }
    setItem(selectedItem);
  };
  const handleClose = () => {
    setShow(false);
    setItem({});
  };
  return [item, handleShow, handleClose];
};
export default useModal;
