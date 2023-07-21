// import Login from "../containers/auth/Login";
// import Logout from "../containers/auth/Logout";
// import Register from "../containers/auth/Register";
// import ResetPassword from "../containers/auth/ResetPassword";
// import VerifyEmail from "../containers/auth/VerifyEmail";

import Profile from "../containers/user/Profile";
import HomeLayout from "../containers/Home/HomeLayout";
import Setting from "../containers/user/Setting";
import StoryRead from "../containers/user/StoryRead";
import UserSetting from "../containers/user/UserSetting";

const Auth = [
  // {
  //   path: "/email/verify/:id/:hash",
  //   element: <VerifyEmail />,
  // },
  {
    path: "/user",
    element: (
      <HomeLayout>
        <UserSetting />
      </HomeLayout>
    ),
  },
];
export default Auth;
