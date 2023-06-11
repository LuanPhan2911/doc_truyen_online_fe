import Stories from "../story/Stories";
import UserRead from "../story/UserRead";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="container content">
      <div className="row flex-row-reverse">
        <div className="col-lg-4 col-sm-12">
          <UserRead />
        </div>
        <div className="col-lg-8 col-sm-12">
          <Stories />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
