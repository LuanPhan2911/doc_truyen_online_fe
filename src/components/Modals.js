import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Modals = ({ isShown, handleClose, RenderView, title }) => {
  return (
    <>
      <Modal show={isShown} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RenderView />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Modals;
