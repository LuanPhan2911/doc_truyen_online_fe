import logo from "../../../assets/logo.svg";
import Genre from "./Genre";
import Ranking from "./Ranking";
import Search from "./Search";
import { Link } from "react-router-dom";
import ManageAuth from "../../auth/ManageAuth";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="container d-flex justify-content-center align-items-center gap-5">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Not found"
              className="logo-image"
              width={"72px"}
              height={"72px"}
            />
          </Link>
          <Genre />
          <Ranking />
          <Search />
          <ManageAuth />
        </div>
      </nav>
    </header>
  );
};
export default Header;
