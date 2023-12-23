import { Link } from "react-router-dom";
import DropdownBase from "../../../components/DropdownBase";
import { useSelector } from "react-redux";
import avatarDefault from "../../../assets/avatar/default.png";
import "./UserMenu.scss";
import { asset } from "../../../utils/Helper";
const UserMenu = () => {
  const user = useSelector((state) => state.user);

  return (
    <DropdownBase minWidth="200px">
      <DropdownBase.Button>
        <img
          src={user.avatar ? asset(user.avatar) : avatarDefault}
          alt="not found"
        />
        <button className="btn-dropdown dropdown-toggle">{user?.name}</button>
      </DropdownBase.Button>
      <DropdownBase.Body>
        <ul className="user-setting">
          <li>
            <Link to={`/user/profile/${user.id}`}>Hồ sơ</Link>
          </li>
          <li>
            <Link to={`/user/story`}>Tủ truyện</Link>
          </li>
          <li>
            <Link to={`/user/setting`}>Cài đặt</Link>
          </li>
          <li>
            <Link to={`/user/notify`}>Thông báo</Link>
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
