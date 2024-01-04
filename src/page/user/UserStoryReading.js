import { useState } from "react";
import NavTab from "../../components/NavTab";
import UserSidebar from "../../containers/user/UserSidebar";
import StoryReading from "../../containers/user/StoryReading";
import StoryMarking from "../../containers/user/StoryMarking";

const UserStoryReading = () => {
  const tabMenu = [
    {
      id: 1,
      name: "Đang đọc",
      active: true,
      component: <StoryReading />,
    },
    {
      id: 2,
      name: "Đánh dấu",
      active: false,
      component: <StoryMarking />,
    },
  ];
  const [tab, setTab] = useState([...tabMenu]);
  return (
    <div className="row">
      <UserSidebar />
      <div className="col">
        <NavTab navTab={tab} setNavTab={setTab} />
      </div>
    </div>
  );
};
export default UserStoryReading;
