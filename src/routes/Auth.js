import ResetPassword from "../containers/auth/ResetPassword";
import VerifyEmail from "../containers/auth/VerifyEmail";
import HomePage from "../containers/Home/HomePage";
import Profile from "../containers/user/Profile";
import Authenticate from "../hoc/auth/Authenticate";

const Auth = [
  {
    path: "/email/verify/:id/:hash",
    element: <VerifyEmail />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword show={true} />,
  },
  {
    path: "/profile",
    element: (
      <HomePage>
        <Authenticate>
          <Profile />
        </Authenticate>
      </HomePage>
    ),
  },
];
export default Auth;
