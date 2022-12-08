import Stories from "./Stories";
import UserRead from "./UserRead";

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
