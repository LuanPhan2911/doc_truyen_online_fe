import "./Header.scss";
import logo from "../../../assets/logo.svg";
import Category from "./Header/Category";
import Ranking from "./Header/Ranking";
import Search from "./Header/Search";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="Not found" className="logo-image" />
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
        <Login />
      </div>
      <div className="register">
        <Register />
      </div>
    </div>
  );
};
export default Header;
