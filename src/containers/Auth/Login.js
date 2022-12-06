import { useState } from "react";
import { Button } from "react-bootstrap";
import Modals from "../../components/Modals";
import LoginForm from "./LoginForm";

const Login = () => {
  const [isShown, setIsShown] = useState(false);
  const handleShow = () => setIsShown(true);
  const handleClose = () => setIsShown(false);
  const title = "Dang nhap";
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dang nhap
      </Button>
      <Modals
        isShown={isShown}
        handleClose={handleClose}
        handleShow={handleShow}
        RenderView={LoginForm}
        title={title}
      />
    </>
  );
};
export default Login;
