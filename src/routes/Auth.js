import LoginForm from "../containers/auth/LoginForm";
import RegisterForm from "../containers/auth/RegisterForm";
import VerifyEmail from "../containers/auth/VerifyEmail";

const Auth = [
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/email/verify/:id/:hash",
    element: <VerifyEmail />,
  },
];
export default Auth;
