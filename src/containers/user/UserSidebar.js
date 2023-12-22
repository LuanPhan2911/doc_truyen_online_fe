import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
      <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
        <ul
          className="w-100 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item w-100">
            <NavLink
              to="/user/"
              className={({ isActive }) => {
                return `custom-link align-middle px-0 ${isActive && "active"}`;
              }}
              end
            >
              <i className="fs-4 bi-person-circle px-2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Hồ sơ</span>
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink
              to="/user/story"
              className={({ isActive }) => {
                return `custom-link align-middle px-0 ${isActive && "active"}`;
              }}
            >
              <i className="fs-4 bi-book px-2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Tủ truyện</span>
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink
              to="/user/setting"
              className={({ isActive }) => {
                return `custom-link align-middle px-0 ${isActive && "active"}`;
              }}
            >
              <i className="fs-4 bi-gear px-2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Cài đặt</span>
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink
              to="/user/notify"
              className={({ isActive }) => {
                return `custom-link align-middle px-0 ${isActive && "active"}`;
              }}
            >
              <i className="fs-4 bi-bell px-2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Thông báo</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserSidebar;
