import Notify from "../components/Notify";
import Logout from "../containers/auth/Logout";
import ResetPassword from "../containers/auth/ResetPassword";
import VerifyEmail from "../containers/auth/VerifyEmail";
import HomePage from "../containers/Home/HomePage";

const Auth = [
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/email/verify/:id/:hash",
    element: <VerifyEmail />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword show={true} />,
  },
  {
    path: "/test",
    element: (
      <HomePage>
        <Notify>
          <ResetPassword />
        </Notify>
      </HomePage>
    ),
  },
];
export default Auth;
