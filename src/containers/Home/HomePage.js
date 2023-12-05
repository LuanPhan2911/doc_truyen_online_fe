import StoryHome from "../story/StoryHome";
import UserRead from "../story/UserRead";
import HomeLayout from "../layouts/HomeLayout";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <HomeLayout>
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-4 col-sm-12">
            <UserRead />
          </div>
          <div className="col-lg-8 col-sm-12">
            <StoryHome />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
export default HomePage;
