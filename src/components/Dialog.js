import { useEffect } from "react";
import "./Dialog.scss";
const Title = ({ children }) => {
  return (
    <div className="popup-title">
      <h2>{children}</h2>
    </div>
  );
};
const Body = ({ children }) => {
  return <div className="popup-body">{children}</div>;
};
const Dialog = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show === true) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "initial";
    };
  }, [show]);

  return (
    <div className={show ? "popup show" : "popup"} id="popup">
      <div className="overplay">
        <div className="popup-content">
          <div className="close" onClick={() => onClose()}>
            <i className="bi bi-x-circle"></i>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
Dialog.Title = Title;
Dialog.Body = Body;
export default Dialog;
