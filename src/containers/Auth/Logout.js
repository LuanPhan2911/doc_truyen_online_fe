import { toast } from "react-toastify";
import { handleLogoutService } from "../../services/AuthServices";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { logoutRedux } from "../../features/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
  let dispatch = useDispatch();
  let naviagte = useNavigate();

  useEffect(() => {
    async function fetch() {
      try {
        let res = await handleLogoutService();
        if (res?.success) {
          dispatch(logoutRedux());
          toast.success("Logout success!");
        }
      } catch (error) {
        toast.error("Logout fail!");
      }
    }

    fetch();
  }, []);
  return <Navigate to={"/"} />;
};
export default Logout;
