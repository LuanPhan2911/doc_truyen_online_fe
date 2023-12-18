import { Link } from "react-router-dom";
import DropdownBase from "../../../components/DropdownBase";
import { useSelector } from "react-redux";

import "./UserMenu.scss";
const UserMenu = () => {
  const user = useSelector((state) => state.user);

  return (
    <DropdownBase minWidth="200px">
      <DropdownBase.Button>
        <button className="btn-dropdown dropdown-toggle">{user?.name}</button>
      </DropdownBase.Button>
      <DropdownBase.Body>
        <ul className="user-setting">
          <li>
            <Link to={`/user/profile/${user.id}`}>Hồ sơ</Link>
          </li>
          <li>
            <Link to={`/user/story-reading`}>Tủ truyện</Link>
          </li>
          <li>
            <Link to={`/user/${user.id}setting`}>Cài đặt</Link>
          </li>
          <li>
            <Link to={`/user/${user.id}notify`}>Thông báo</Link>
          </li>
          <li>
            <Link to={"/logout"}>Thoát</Link>
          </li>
        </ul>
      </DropdownBase.Body>
    </DropdownBase>
  );
};
export default UserMenu;
