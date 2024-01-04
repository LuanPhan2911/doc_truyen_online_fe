import StoryOutStanding from "../containers/story/StoryOutStanding";
import "./HomePage.scss";
import StoryReading from "../containers/story/StoryReading";
const HomePage = () => {
  return (
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-4 col-sm-12">
          <StoryReading />
        </div>
        <div className="col-lg-8 col-sm-12">
          <StoryOutStanding />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
