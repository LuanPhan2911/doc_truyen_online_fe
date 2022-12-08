import "./Header.scss";
import logo from "../../../assets/logo.svg";
import Category from "./Header/Category";
import Ranking from "./Header/Ranking";
import Search from "./Header/Search";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="Not found" className="logo-image" />
        </Link>
      </div>
      <div className="category">
        <Category />
      </div>
      <div className="ranking">
        <Ranking />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="login">
        <Login show={true} />
      </div>
      <div className="register">
        <Register show={true} />
      </div>
    </div>
  );
};
export default Header;
