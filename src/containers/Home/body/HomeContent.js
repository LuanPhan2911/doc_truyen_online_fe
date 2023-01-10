import Stories from "../../story/Stories";
import UserRead from "../../story/UserRead";
const HomeContent = () => {
  return (
    <div className="row">
      <div className="col-8">
        <Stories />
      </div>
      <div className="col-4">
        <UserRead />
      </div>
    </div>
  );
};
export default HomeContent;
