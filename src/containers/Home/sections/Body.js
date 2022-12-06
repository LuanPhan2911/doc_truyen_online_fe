import BackGroundImage from "./Body/BackGroundImage";
import "./Body.scss";
import Stories from "./Body/Stories";
const Body = () => {
  return (
    <>
      <div className="background-image">
        <BackGroundImage />
      </div>
      <div className="body-container">
        <div className="row">
          <div className="col-8">
            <Stories />
          </div>
          <div className="col-4"></div>
        </div>

        <div className="user-read"></div>
      </div>
    </>
  );
};
export default Body;
