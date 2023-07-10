// import Login from "../containers/auth/Login";
// import Logout from "../containers/auth/Logout";
// import Register from "../containers/auth/Register";
// import ResetPassword from "../containers/auth/ResetPassword";
// import VerifyEmail from "../containers/auth/VerifyEmail";

import Profile from "../containers/user/Profile";
import HomeLayout from "../containers/Home/HomeLayout";
import Setting from "../containers/user/Setting";
import StoryRead from "../containers/user/StoryRead";

const Auth = [
  // {
  //   path: "/email/verify/:id/:hash",
  //   element: <VerifyEmail />,
  // },
  {
    path: "/profile",
    element: (
      <HomeLayout>
        <Profile />
      </HomeLayout>
    ),
  },
  {
    path: "/user/setting",
    element: (
      <HomeLayout>
        <Setting />
      </HomeLayout>
    ),
  },
  {
    path: "/user/story-reading",
    element: (
      <HomeLayout>
        <StoryRead />
      </HomeLayout>
    ),
  },
];
export default Auth;
