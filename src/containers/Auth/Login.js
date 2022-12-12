import { useState } from "react";
// import { Button } from "react-bootstrap";
import Modals from "../../components/Modals";
import HomePage from "../Home/HomePage";
import LoginForm from "./LoginForm";

const Login = ({ show }) => {
  const [isShown, setIsShown] = useState(false);
  const handleShow = () => setIsShown(true);
  const handleClose = () => setIsShown(false);
  const title = "Dang nhap";
  return show ? (
    <>
      <button
        onClick={() => handleShow()}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      >
        Dang nhap
      </button>
      <Modals
        isShown={isShown}
        handleClose={handleClose}
        handleShow={handleShow}
        RenderView={LoginForm}
        title={title}
      />
    </>
  ) : (
    <>
      <HomePage>
        <LoginForm />
      </HomePage>
    </>
  );
};
export default Login;
