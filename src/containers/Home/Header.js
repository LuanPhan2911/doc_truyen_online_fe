import { useEffect, useState } from "react";

import Genre from "./header/Genre";
import Ranking from "./header/Ranking";
import Search from "./header/Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import {
  handleGetUserService,
  handleLogoutService,
} from "../../services/AuthServices";
import { setUserRedux } from "../../features/userSlice";
import LoginForm from "../auth/LoginForm";
import Dialog from "../../components/Dialog";
import RegisterForm from "../auth/RegisterForm";

import VerifyEmailForm from "../auth/VerifyEmailForm";
import ResetPasswordForm from "../auth/ResetPasswordForm";

import ForgotPasswordForm from "../auth/ForgotPasswordForm";
import avatarDefault from "../../assets/avatar/default.png";
import User from "./header/User";
const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const [searchBtn, setSearchBtn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuDialog] = useState([
    {
      id: "login",
      name: "",
      component: <LoginForm handleShowDialog={handleShowDialog} />,
    },
    {
      id: "register",
      name: "",
      component: <RegisterForm />,
    },
    {
      id: "verify-email",
      name: "",
      component: <VerifyEmailForm />,
    },
    {
      id: "forgot-password",
      name: "",
      component: <ForgotPasswordForm />,
    },
  ]);
  const [itemDialog, setItemDialog] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  function handleShowDialog(itemId) {
    let obj = {};
    if (menuDialog?.length > 0) {
      obj = menuDialog.find((item) => item.id === itemId);
    }
    setShowDialog(true);
    setItemDialog({ ...obj });
  }

  useEffect(() => {
    if (isAuth) {
      setShowDialog(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
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
          Me truyen
        </Link>
        <div className="group">
          <ul className="navigation">
            {isAuth ? (
              <li className="user-login">
                <img src={avatarDefault} alt="not found"></img>
                <User btn={"YokKok"} />
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
      <Dialog show={showDialog} onClose={() => setShowDialog(false)}>
        <Dialog.Title key={"title"}>{itemDialog.name}</Dialog.Title>
        <Dialog.Body key={"body"}>{itemDialog.component}</Dialog.Body>
      </Dialog>
    </>
  );
};
export default Header;
