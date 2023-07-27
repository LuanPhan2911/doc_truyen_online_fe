import { useEffect, useState } from "react";

import Genre from "./header/Genre";
import Ranking from "./header/Ranking";
import { Link, useNavigate } from "react-router-dom";
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
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [toggleMenu]);
  const handleEnterToSearch = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  const handleSearch = () => {
    setSearchBtn(true);
    if (search) {
      navigate({
        pathname: "/story",
        search: `?q=${search}`,
      });
    }
  };
  const handleCloseSearch = () => {
    setSearchBtn(false);
    navigate({
      search: "",
    });
  };
  const handleOnChangeInputSearch = (e) => {
    let q = e.target.value;
    setSearch(q);
    if (!q) {
      navigate({
        pathname: "/story",
      });
    }
  };
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
                <i className="bi bi-search" onClick={() => handleSearch()}></i>
              </div>
              <div
                className={searchBtn ? "search-close active" : "search-close"}
              >
                <i
                  className="bi bi-x-lg"
                  onClick={() => handleCloseSearch()}
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
          <input
            type="text"
            placeholder="Tìm kiếm"
            value={search}
            onChange={(e) => handleOnChangeInputSearch(e)}
            onKeyDown={(e) => handleEnterToSearch(e)}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
