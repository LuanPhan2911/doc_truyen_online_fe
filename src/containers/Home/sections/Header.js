import logo from "../../../assets/logo.svg";
import Category from "./Header/Category";
import Ranking from "./Header/Ranking";
import Search from "./Header/Search";
import { Link } from "react-router-dom";
import ManageAuth from "../../Auth/ManageAuth";

const Header = () => {
  return (
    <div
      className="row"
      style={{
        height: "65px",
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
      <div className="col-4">
        <ManageAuth />
      </div>
    </div>
  );
};
export default Header;
