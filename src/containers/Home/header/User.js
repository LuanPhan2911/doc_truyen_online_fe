import { Link } from "react-router-dom";
import DropdownBase from "../../../components/DropdownBase";
import { handleLogoutService } from "../../../services/AuthServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../features/userSlice";

const User = ({ btn }) => {
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
          <ul>
            <li>
              <Link to={"/user"}>Profile</Link>
            </li>
            <li>
              <Link to={"/user/story-reading"}>Tủ truyện</Link>
            </li>
            <li>
              <Link to={"/user/setting"}>Cài đặt</Link>
            </li>
            <li onClick={() => handleUserLogout()}>Thoát</li>
          </ul>
        ),
      }}
    </DropdownBase>
  );
};
export default User;
