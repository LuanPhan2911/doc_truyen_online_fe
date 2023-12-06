const Offcanvas = ({ children, offcanvasTitle }) => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" id="offcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{offcanvasTitle}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">{children}</div>
      </div>
    </>
  );
};
export default Offcanvas;
