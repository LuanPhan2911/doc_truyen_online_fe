import { Link } from "react-router-dom";
import DropdownBase from "../../../components/DropdownBase";
import { useSelector } from "react-redux";

import "./User.scss";
const User = ({ btn }) => {
  const user = useSelector((state) => state.user);

  return (
    <DropdownBase minWidth="200px">
      {{
        btn: <span className="btn-dropdown">{btn}</span>,
        body: (
          <ul className="user-setting">
            <li>
              <Link to={`/user/${user.id}`}>Hồ sơ</Link>
            </li>
            <li>
              <Link to={`/user/${user.id}/story-reading`}>Tủ truyện</Link>
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
        ),
      }}
    </DropdownBase>
  );
};
export default User;
