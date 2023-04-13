import logo from "../assets/logo.svg";
import Genre from "../containers/Home/header/Genre";
import Ranking from "../containers/Home/header/Ranking";
import Search from "../containers/Home/header/Search";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <Link to={"/"} className="navbar-brand">
            <img
              src={logo}
              alt="Not found!"
              className="img-logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Genre />
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
