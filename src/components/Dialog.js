import { useEffect, useRef } from "react";
import "./Dialog.scss";
const Dialog = ({ item, setItem }) => {
  const ref = useRef();
  let { name: title, component: body, showContent: show } = item;

  // useEffect(() => {
  //   document.addEventListener("click", handleClose);
  //   return () => {
  //     document.removeEventListener("click", handleClose);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [item]);
  // function handleClose(_event) {
  //   if (show && !ref?.current.contains(_event.target)) {
  //     setItem({ ...item, showContent: false });
  //   }
  // }
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
        <div className="popup-content" ref={ref}>
          <div className="popup-title">
            <h2>{title}</h2>
            <div
              className="close"
              onClick={() => setItem({ ...item, showContent: false })}
            >
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
