import Modals from "../../components/Modals";
import { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
const Register = () => {
  const [isShown, setIsShown] = useState(false);
  const handleShow = () => setIsShown(true);
  const handleClose = () => setIsShown(false);
  const title = "Dang ky";
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dang ky
      </Button>
      <Modals
        isShown={isShown}
        handleClose={handleClose}
        handleShow={handleShow}
        RenderView={RegisterForm}
        title={title}
      />
    </>
  );
};
export default Register;
