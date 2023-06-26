import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
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
import { setUserRedux } from "../../features/authSlice";
import LoginForm from "../auth/LoginForm";
import Dialog from "../../components/Dialog";
import RegisterForm from "../auth/RegisterForm";

const Header = ({ backgroundColor }) => {
  const user = useSelector((state) => state.auth.user) || false;
  const dispatch = useDispatch();
  const [searchBtn, setSearchBtn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loginFormItem, setLoginFormItem] = useState({
    name: "",
    component: <LoginForm />,
    showContent: false,
  });
  const [registerFormItem, setRegisterFormItem] = useState({
    name: "",
    component: <RegisterForm />,
    showContent: false,
  });
  // useEffect(() => {
  //   if (!user) {
  //     const fetch = async () => {
  //       try {
  //         let res = await handleGetUserService();

  //         if (res?.success) {
  //           dispatch(setUserRedux({ ...res.data }));
  //         }
  //       } catch (error) {}
  //     };
  //     fetch();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [toggleMenu]);

  return (
    <div className={toggleMenu ? "header open" : "header"}>
      <Link className="logo" to={"/"}>
        Me truyen
      </Link>
      <div className="group">
        <ul className="navigation">
          <li>
            <i className="bi bi-border-all"></i>
            <Genre btn="Thể loại" />
          </li>
          <li>
            <i className="bi bi-bar-chart"></i>
            <Ranking btn={"Bảng xếp hạng"} />
          </li>
          <li>
            <i className="bi bi-person-circle"></i>
            <span
              onClick={() =>
                setLoginFormItem({ ...loginFormItem, showContent: true })
              }
            >
              Đăng nhập
            </span>
            <Dialog item={loginFormItem} setItem={setLoginFormItem} />
          </li>
          <li>
            <i className="bi bi-person-add"></i>
            <span
              onClick={() =>
                setRegisterFormItem({ ...registerFormItem, showContent: true })
              }
            >
              Đăng ký
            </span>
            <Dialog item={registerFormItem} setItem={setRegisterFormItem} />
          </li>
        </ul>
        <div className="search">
          <div className="icon">
            <div className="search-icon">
              <i
                className="bi bi-search"
                onClick={() => setSearchBtn(true)}
              ></i>
            </div>
            <div className={searchBtn ? "search-close active" : "search-close"}>
              <i className="bi bi-x-lg" onClick={() => setSearchBtn(false)}></i>
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
  );
};
export default Header;
