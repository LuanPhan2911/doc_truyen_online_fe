import HomeLayout from "../../containers/layouts/HomeLayout";
import UserSidebar from "../../containers/user/UserSidebar";
const UserNotify = () => {
  return (
    <HomeLayout>
      <div className="row">
        <UserSidebar />
        <div className="col"></div>
      </div>
    </HomeLayout>
  );
};
export default UserNotify;
