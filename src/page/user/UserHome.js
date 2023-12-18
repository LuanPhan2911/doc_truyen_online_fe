import HomeLayout from "../../containers/layouts/HomeLayout";
import UserSidebar from "../../containers/user/UserSidebar";

const UserHome = () => {
  return (
    <HomeLayout>
      <div className="row">
        <UserSidebar />
        {/* <div className="bg-primary col">Hồ sơ</div> */}
      </div>
    </HomeLayout>
  );
};
export default UserHome;
