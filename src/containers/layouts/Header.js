import { useEffect, useState } from "react";
import Ranking from "./header/Ranking";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Notifies from "./header/Notifies";
import "./Header.scss";
import Category from "./header/Category";
import { handleClose, handleShow } from "../../features/authSlice";
import Modal from "react-bootstrap/Modal";
import UserMenu from "./header/UserMenu";
const Header = ({ color, backgroundColor }) => {
  const dispatch = useDispatch();

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
                  <UserMenu />
                </li>
                <li>
                  <Notifies />
                </li>
              </>
            )}
            <li>
              <Category />
            </li>
            <li>
              <Ranking />
            </li>
            {!isAuth && (
              <>
                <li>
                  <i className="bi bi-person-circle"></i>
                  <button onClick={() => handleShowModal("login")}>
                    {" "}
                    Đăng nhập
                  </button>
                </li>
                <li>
                  <i className="bi bi-person-add"></i>
                  <button onClick={() => handleShowModal("register")}>
                    Đăng ký
                  </button>
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
