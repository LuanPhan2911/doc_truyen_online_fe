import { useAuth } from "../../../hooks";
import Header from "./Header";
import SideBar from "./Sidebar";

const AdminLayout = ({ children, offcanvasTitle, offcanvasBody }) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col">
          <div className="container">
            <Header
              offcanvasTitle={offcanvasTitle}
              offcanvasBody={offcanvasBody}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
