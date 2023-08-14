import Profile from "../containers/user/Profile";
import HomeLayout from "../containers/Home/HomeLayout";
import Setting from "../containers/user/Setting";

import { AuthProvider } from "../hoc";
import StoryRead from "../containers/user/StoryRead";
import Notify from "../containers/user/Notify";

const Auth = [
  // {
  //   path: "/email/verify/:id/:hash",
  //   element: <VerifyEmail />,
  // },
  {
    path: "/user",
    element: (
      <AuthProvider>
        <HomeLayout>
          <Profile />
        </HomeLayout>
      </AuthProvider>
    ),
  },
  {
    path: "/user/setting",
    element: (
      <AuthProvider>
        <HomeLayout>
          <Setting />
        </HomeLayout>
      </AuthProvider>
    ),
  },
  {
    path: "/user/story-reading",
    element: (
      <AuthProvider>
        <HomeLayout>
          <StoryRead />
        </HomeLayout>
      </AuthProvider>
    ),
  },
  {
    path: "/user/notify",
    element: (
      <AuthProvider>
        <HomeLayout>
          <Notify />
        </HomeLayout>
      </AuthProvider>
    ),
  },
];
export default Auth;
