import ResetPassword from "../containers/auth/ResetPassword";
import VerifyEmail from "../containers/auth/VerifyEmail";

const Auth = [
  {
    path: "/email/verify/:id/:hash",
    element: <VerifyEmail />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword show={true} />,
  },
];
export default Auth;
