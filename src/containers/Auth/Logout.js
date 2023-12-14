import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogoutService } from "../../services/AuthServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    async function handleLogout() {
      try {
        let res = await handleLogoutService();
        if (res?.success) {
          toast.success("Bạn đã đăng xuất!");
          dispatch(logout());
          navigate("/");
        }
      } catch (error) {
        toast.error("Đăng xuất thất bại!");
      }
    }
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return;
};
export default Logout;
