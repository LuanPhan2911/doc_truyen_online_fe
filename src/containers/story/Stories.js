import { Link } from "react-router-dom";
import Story from "./Story";
const Stories = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="h4">Biên tập viên đề cử</div>
        <Link to={""} className="global-link">
          Xem tất cả
        </Link>
      </div>

      <div className="row">
        {stories &&
          stories.length > 0 &&
          stories.map((item, index) => {
            return <Story key={index} />;
          })}
      </div>
    </>
  );
};
export default Stories;
