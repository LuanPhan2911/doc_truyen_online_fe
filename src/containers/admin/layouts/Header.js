import Breadcrumb from "./Breadcrumb";
import Offcanvas from "./Offcanvas";

const Header = ({ offcanvasTitle, offcanvasBody }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Breadcrumb />
        <Offcanvas offcanvasTitle={offcanvasTitle}>{offcanvasBody}</Offcanvas>
      </div>
    </nav>
  );
};

export default Header;
