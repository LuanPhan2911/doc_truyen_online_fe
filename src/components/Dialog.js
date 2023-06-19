import { useEffect } from "react";
import "./Dialog.scss";
const Dialog = ({ show, setShow, title, body }) => {
  useEffect(() => {
    if (show === true) {
      document.body.style.overflow = "hidden";
    }
  }, [show]);
  const handleClose = () => {
    document.body.style.overflow = "initial";
    setShow(false);
  };
  return (
    <div className={show ? "popup show" : "popup"} id="popup">
      <div className="overplay">
        <div className="popup-content">
          <div className="popup-title">
            <h2>{title}</h2>
            <div className="close" onClick={() => handleClose()}>
              <i className="bi bi-x-circle"></i>
            </div>
          </div>
          <div className="popup-body">{body}</div>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
