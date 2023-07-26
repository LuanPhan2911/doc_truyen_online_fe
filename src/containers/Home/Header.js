import { useEffect, useState } from "react";

import Genre from "./header/Genre";
import Ranking from "./header/Ranking";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";
import avatarDefault from "../../assets/avatar/default.png";
import User from "./header/User";
import { asset } from "../../utils/Helper";
import { useDialog } from "../../hooks";
const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user);
  const [searchBtn, setSearchBtn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [handleShowDialog, handleCloseDialog] = useDialog();
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [toggleMenu]);

  return (
    <>
      <div className={toggleMenu ? "header open" : "header"}>
        <Link className="logo" to={"/"}>
          Stop truyen
        </Link>
        <div className="group">
          <ul className="navigation">
            {isAuth ? (
              <li className="user-login">
                <img
                  src={user.avatar ? asset(user.avatar) : avatarDefault}
                  alt="not found"
                ></img>
                <User btn={user.name} />
              </li>
            ) : (
              <></>
            )}
            <li>
              <i className="bi bi-border-all"></i>
              <Genre btn="Thể loại" />
            </li>
            <li>
              <i className="bi bi-bar-chart"></i>
              <Ranking btn={"Bảng xếp hạng"} />
            </li>
            {!isAuth ? (
              <>
                <li>
                  <i className="bi bi-person-circle"></i>
                  <span onClick={() => handleShowDialog("login")}>
                    Đăng nhập
                  </span>
                </li>
                <li>
                  <i className="bi bi-person-add"></i>
                  <span onClick={() => handleShowDialog("register")}>
                    Đăng ký
                  </span>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
          <div className="search">
            <div className="icon">
              <div className="search-icon">
                <i
                  className="bi bi-search"
                  onClick={() => setSearchBtn(true)}
                ></i>
              </div>
              <div
                className={searchBtn ? "search-close active" : "search-close"}
              >
                <i
                  className="bi bi-x-lg"
                  onClick={() => setSearchBtn(false)}
                ></i>
              </div>
            </div>
          </div>
          <div className="toggle-menu">
            <i
              className="bi bi-list"
              onClick={() => setToggleMenu(!toggleMenu)}
            ></i>
          </div>
        </div>
        <div className={searchBtn ? "search-box active" : "search-box"}>
          <input type="text" placeholder="Tìm kiếm" />
        </div>
      </div>
      {/* <Dialog show={showDialog} onClose={() => setShowDialog(false)}>
        <Dialog.Title key={"title"}>{itemDialog.name}</Dialog.Title>
        <Dialog.Body key={"body"}>{itemDialog.component}</Dialog.Body>
      </Dialog> */}
    </>
  );
};
export default Header;
