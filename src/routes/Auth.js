import Login from "../containers/auth/Login";
import Logout from "../containers/auth/Logout";
import Register from "../containers/auth/Register";
import ResetPassword from "../containers/auth/ResetPassword";
import VerifyEmail from "../containers/auth/VerifyEmail";

const Auth = [
  {
    path: "/email/verify/:id/:hash",
    element: <VerifyEmail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword show={true} />,
  },
];
export default Auth;
