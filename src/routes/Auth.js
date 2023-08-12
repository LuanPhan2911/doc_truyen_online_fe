import Profile from "../containers/user/Profile";
import HomeLayout from "../containers/Home/HomeLayout";
import Setting from "../containers/user/Setting";
import StoryRead from "../containers/user/StoryRead";
import UserSetting from "../containers/user/UserSetting";
import { AuthProvider } from "../hoc";

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
          <UserSetting />
        </HomeLayout>
      </AuthProvider>
    ),
  },
];
export default Auth;
