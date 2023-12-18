import UserHome from "../page/user/UserHome";
import UserNotify from "../page/user/UserNotity";
import UserProfile from "../page/user/UserProfile";
import UserSetting from "../page/user/UserSetting";
import UserStoryReading from "../page/user/UserStoryReading";

const User = [
  {
    path: "/user",
    element: <UserHome />,
  },
  {
    path: "/user/story",
    element: <UserStoryReading />,
  },
  {
    path: "/user/profile/:id",
    element: <UserProfile />,
  },
  {
    path: "/user/notify/",
    element: <UserNotify />,
  },
  {
    path: "/user/setting/",
    element: <UserSetting />,
  },
];
export default User;
