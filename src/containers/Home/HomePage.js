import Stories from "../story/Stories";
import UserRead from "../story/UserRead";
const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <Stories />
        </div>
        <div className="col-lg-4 col-sm-12">
          <UserRead />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
