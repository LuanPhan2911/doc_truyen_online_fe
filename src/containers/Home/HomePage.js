import StoryHome from "../story/StoryHome";
import UserRead from "../story/UserRead";
import "./HomePage.scss";
const HomePage = () => {
  return (
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
  );
};
export default HomePage;
