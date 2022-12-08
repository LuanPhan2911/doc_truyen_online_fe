import Modals from "../../components/Modals";
import { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import HomePage from "../Home/HomePage";
const Register = ({ show }) => {
  const [isShown, setIsShown] = useState(false);
  const handleShow = () => setIsShown(true);
  const handleClose = () => setIsShown(false);
  const title = "Dang ky";
  return show ? (
    <>
      <Button variant="primary" onClick={handleShow}>
        {" "}
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
  ) : (
    <>
      <HomePage>
        <RegisterForm />
      </HomePage>
    </>
  );
};
export default Register;
