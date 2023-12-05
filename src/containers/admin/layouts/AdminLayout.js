import Header from "./Header";
import SideBar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col">
          <div className="container">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
