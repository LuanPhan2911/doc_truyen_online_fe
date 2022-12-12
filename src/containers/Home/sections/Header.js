import logo from "../../../assets/logo.svg";
import Category from "./Header/Category";
import Ranking from "./Header/Ranking";
import Search from "./Header/Search";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";
import { Link } from "react-router-dom";
import Logout from "../../Auth/Logout";
const Header = () => {
  return (
    <div
      className="row sticky-top"
      style={{
        height: "65px",
        backgroundColor: "#bd953b",
      }}
    >
      <div className="col-1">
        <Link to={"/"}>
          <img
            src={logo}
            alt="Not found"
            className="logo-image"
            width={"72px"}
            height={"72px"}
          />
        </Link>
      </div>
      <div className="col-2">
        <Category />
      </div>
      <div className="col-2">
        <Ranking />
      </div>
      <div className="col-3">
        <Search />
      </div>
      <div className="col-2">
        <Login show={true} />
      </div>
      <div className="col-2">
        <Register show={true} />
        <Logout />
      </div>
    </div>
  );
};
export default Header;
