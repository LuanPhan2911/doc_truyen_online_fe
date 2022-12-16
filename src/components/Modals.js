import { Modal } from "react-bootstrap";
const Modals = ({ size, isShown, handleClose, children }) => {
  return (
    <>
      <Modal show={isShown} onHide={handleClose} size={size}>
        <Modal.Header closeButton>
          <Modal.Title>{children?.Title ? children.Title : <></>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children?.Element ? children.Element : <></>}</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Modals;
