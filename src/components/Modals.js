import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseModal } from "../features/appSlice";
const Modals = ({ size, children }) => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.app.isShowModal);
  const handleClose = () => dispatch(handleCloseModal());

  return (
    <>
      <Modal show={isShown} onHide={handleClose} size={size || "sm"}>
        <Modal.Header closeButton>
          <Modal.Title>{children?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children?.Element}</Modal.Body>
      </Modal>
    </>
  );
};
export default Modals;
