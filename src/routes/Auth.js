import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";

const Auth = [
  {
    path: "/login",
    element: <Login show={false} />,
  },
  {
    path: "/register",
    element: <Register show={false} />,
  },
];
export default Auth;
