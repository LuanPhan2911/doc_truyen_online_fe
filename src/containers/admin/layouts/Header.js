import Breadcrumb from "./Breadcrumb";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Breadcrumb />
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
            <h5 className="offcanvas-title">Stop Truyện</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
