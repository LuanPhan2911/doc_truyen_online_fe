import { useState } from "react";
import HomeLayout from "../../containers/layouts/HomeLayout";
import UserSidebar from "../../containers/user/UserSidebar";
import NavTab from "../../components/NavTab";
import Profile from "../../containers/user/Profile";

const UserSetting = () => {
  const tabMenu = [
    {
      id: 1,
      name: "Tài khoản",
      active: true,
      component: <Profile />,
    },
    {
      id: 2,
      name: "Bảo mật",
      active: false,
      component: <></>,
    },
    {
      id: 3,
      name: "Cấu hình",
      active: false,
      component: <></>,
    },
  ];
  const [tab, setTab] = useState([...tabMenu]);
  return (
    <HomeLayout>
      <div className="row">
        <UserSidebar />
        <div className="col">
          <NavTab navTab={tab} setNavTab={setTab} />
        </div>
      </div>
    </HomeLayout>
  );
};
export default UserSetting;
