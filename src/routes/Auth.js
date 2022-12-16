import Logout from "../containers/Auth/Logout";
import Profile from "../containers/User/Profile";
import Authenticate from "../hoc/auth/Authenticate";

const Auth = [
  // {
  //   path: "/login",
  //   element: <Login show={false} />,
  // },
  // {
  //   path: "/register",
  //   element: <Register show={false} />,
  // },
  {
    path: "/logout",
    element: <Logout />,
  },

  {
    path: "/profile",
    element: (
      <Authenticate>
        <Profile />
      </Authenticate>
    ),
  },
];
export default Auth;
