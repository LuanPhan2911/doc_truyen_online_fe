import { useEffect, useState } from "react";
import Ranking from "./header/Ranking";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatarDefault from "../../assets/avatar/default.png";
import User from "./header/User";
import { asset } from "../../utils/Helper";
import Notifies from "./header/Notifies";
import "./Header.scss";
import Category from "./header/Category";
import { handleClose, handleShow } from "../../features/authSlice";
import Modal from "react-bootstrap/Modal";
const Header = ({ color, backgroundColor }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [searchBtn, setSearchBtn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [qs, setQS] = useSearchParams();

  const { isShow, item } = useSelector((state) => state.auth);

  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleShowModal = (id) => dispatch(handleShow(id));
  const handleCloseModal = () => dispatch(handleClose());

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
    if (qs.get("name")) {
      navigate({
        pathname: "/story",
        search: `?name=${qs.get("name")}`,
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
    let search = e.target.value;
    setQS((prev) => {
      prev.set("name", search);
      if (!search) {
        prev.delete("name");
      }
      return prev;
    });
    if (!search) {
      navigate({
        pathname: "/story",
      });
    }
  };
  return (
    <>
      <div
        className={toggleMenu ? "header open" : "header"}
        style={{
          color,
          backgroundColor,
        }}
      >
        <Link className="logo" to={"/"}>
          Stop truyen
        </Link>
        <div className="group">
          <ul className="navigation">
            {isAuth && (
              <>
                <li className="user-login">
                  <img
                    src={user.avatar ? asset(user.avatar) : avatarDefault}
                    alt="not found"
                  />
                  <User btn={user.name} />
                </li>
                <li>
                  <i className="bi bi-bell"></i>
                  <Notifies btn={"Thông báo"} />
                </li>
              </>
            )}
            <li>
              <i className="bi bi-border-all"></i>
              <Category btn="Thể loại" />
            </li>
            <li>
              <i className="bi bi-bar-chart"></i>
              <Ranking btn={"Bảng xếp hạng"} />
            </li>
            {!isAuth && (
              <>
                <li>
                  <i className="bi bi-person-circle"></i>
                  <span onClick={() => handleShowModal("login")}>
                    {" "}
                    Đăng nhập
                  </span>
                </li>
                <li>
                  <i className="bi bi-person-add"></i>
                  <span onClick={() => handleShowModal("register")}>
                    Đăng ký
                  </span>
                </li>
              </>
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
            value={qs.get("name") || ""}
            onChange={(e) => handleOnChangeInputSearch(e)}
            onKeyDown={(e) => handleEnterToSearch(e)}
          />
        </div>
      </div>
      {isShow && (
        <Modal show={isShow} onHide={() => handleCloseModal()}>
          <Modal.Header closeButton>
            <Modal.Title>{item?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{item?.component}</Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default Header;
