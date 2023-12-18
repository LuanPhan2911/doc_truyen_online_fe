import HomeLayout from "../../containers/layouts/HomeLayout";
import UserSidebar from "../../containers/user/UserSidebar";

const UserProfile = () => {
  return (
    <HomeLayout>
      <div className="row">
        <UserSidebar />
        <div className="col">Hồ sơ</div>
      </div>
    </HomeLayout>
  );
};
export default UserProfile;
