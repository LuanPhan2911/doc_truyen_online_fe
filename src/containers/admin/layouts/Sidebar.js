import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <Link
            to="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Stop Truyện</span>
          </Link>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to="/admin" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link align-middle px-0">
                <i className="fs-4 bi-person-circle"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Users</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/story" className="nav-link align-middle px-0">
                <i className="fs-4 bi-book"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Story</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/reports/type/stories"
                className="nav-link align-middle px-0"
              >
                <i className="fs-4 bi-flag"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Reports</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/genre" className="nav-link align-middle px-0">
                <i className="fs-4 bi-newspaper"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Genres</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/logout"
                className="nav-link align-middle px-0"
                id="logout"
              >
                <i className="fs-4 bi-box-arrow-left"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Sign out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
