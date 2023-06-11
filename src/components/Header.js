import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Genre from "../containers/Home/header/Genre";
import Ranking from "../containers/Home/header/Ranking";
import Search from "../containers/Home/header/Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import {
  handleGetUserService,
  handleLogoutService,
} from "../services/AuthServices";
import { setUserRedux } from "../features/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user) || false;
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
      <nav className="navbar navbar-expand-md">
        <div className="container-md">
          <Link to={"/"} className="navbar-brand">
            <img
              src={logo}
              alt="Not found!"
              className="img-logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Genre />
              </li>
              <li className="nav-item">
                <Ranking />
              </li>
              <li className="nav-item">
                <Search />
              </li>
              {!user ? (
                <>
                  <li className="nav-item">
                    <Link to={"/login"} className="btn">
                      Đăng nhập
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"} className="btn">
                      Đăng ký
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <div className="profile">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbDKrQv3u1w7jezq0MZqp0Y2Ef9yGFWH78w&usqp=CAU"
                        alt="not found"
                      />
                      <span className="name">LuanPhan</span>
                    </div>
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
