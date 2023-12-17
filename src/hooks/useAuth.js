import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserService } from "../services/AuthServices";
import { login, logout } from "../features/userSlice";
import { setAuth } from "../features/authSlice";

const useAuth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchUser() {
      try {
        let res = await handleGetUserService();
        if (res?.success) {
          let user = res.data;
          dispatch(setAuth(true));
          dispatch(login(user));
        }
      } catch (error) {
        dispatch(logout());
        dispatch(setAuth(false));
      }
    }
    if (!userId) {
      fetchUser();
    } else {
      dispatch(setAuth(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [isAuth];
};
export default useAuth;
