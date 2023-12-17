import HomeLayout from "../containers/layouts/HomeLayout";
import StoryOutStanding from "../containers/story/StoryOutStanding";
import "./HomePage.scss";
import StoryReading from "../containers/story/StoryReading";
const HomePage = () => {
  return (
    <HomeLayout>
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
    </HomeLayout>
  );
};
export default HomePage;
