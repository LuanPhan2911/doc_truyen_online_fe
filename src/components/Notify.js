import { Link } from "react-router-dom";

const Notify = ({ children }) => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          height: "200px",
        }}
      >
        {children}
        <Link className="btn btn-success" to={"/"}>
          Click here to redirect homepage
        </Link>
      </div>
    </>
  );
};
export default Notify;
