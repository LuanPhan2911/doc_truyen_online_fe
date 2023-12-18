import { useState } from "react";
import NavTab from "../../components/NavTab";
import HomeLayout from "../../containers/layouts/HomeLayout";
import UserSidebar from "../../containers/user/UserSidebar";

const UserStoryReading = () => {
  const tabMenu = [
    {
      id: 1,
      name: "Đang đọc",
      active: true,
      component: <></>,
    },
    {
      id: 2,
      name: "Đánh dấu",
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
export default UserStoryReading;
