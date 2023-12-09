import { Link } from "react-router-dom";
import DropdownBase from "../../../components/DropdownBase";
import { handleLogoutService } from "../../../services/AuthServices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../features/userSlice";
import "./User.scss";
const User = ({ btn }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleUserLogout = async () => {
    try {
      let res = await handleLogoutService();
      if (res?.success) {
        toast.success("Đã đăng xuất");
        dispatch(userLogout());
      }
    } catch (error) {
      toast.error("Logout fail!");
    }
  };
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
            <li onClick={() => handleUserLogout()}>Thoát</li>
          </ul>
        ),
      }}
    </DropdownBase>
  );
};
export default User;
