import "./Header.scss";
import logo from "../../../assets/logo.svg";
import Category from "./Header/Category";
import Ranking from "./Header/Ranking";
import Search from "./Header/Search";
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
        <p>Dang nhap</p>
      </div>
      <div className="register">
        <p>Dang ky</p>
      </div>
    </div>
  );
};
export default Header;
