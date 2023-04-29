import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Genre from "../containers/Home/header/Genre";
import Ranking from "../containers/Home/header/Ranking";
import Search from "../containers/Home/header/Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetUserService,
  handleLogoutService,
} from "../services/AuthServices";
import { setUserRedux } from "../features/authSlice";
const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      const fetch = async () => {
        try {
          let res = await handleGetUserService();

          if (res?.success) {
            dispatch(setUserRedux({ ...res.data }));
          }
        } catch (error) {}
      };
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              {!user ? (
                <>
                  <li className="nav-item">
                    <Link to={"/login"} className="btn">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"} className="btn">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to={"/logout"} className="btn">
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
