import story from "../../assets/stories/150.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";
import ChapterList from "./ChapterList";
import Description from "./Description";
import Comments from "../comments/Comments";
const StoryContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={story} alt="Not found" width={"100%"} height={"270px"} />
        </div>
        <div className="col-10">
          <div className="d-flex justify-content-start flex-column">
            <div className="story-title h3">Dai cang truong sinh</div>
            <ul className="list-unstyled mt-2">
              <li className="d-inline px-3 border border-3 rounded-5 mx-2 py-1">
                <Link to={"#"} className="global-link text-secondary">
                  Mai bao tieu lang quan
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex">
              <li className="mx-4">
                <div>1372</div>
                <div>Chuong</div>
              </li>
              <li className="mx-4">
                <div>11</div>
                <div>Chuong/ tuan</div>
              </li>
              <li className="mx-4">
                <div>95.5k</div>
                <div>Luot doc</div>
              </li>
              <li className="mx-4">
                <div>1000</div>
                <div>Cat tru</div>
              </li>
            </ul>
            <div className="d-flex">
              <div className="">
                <AiFillStar color="yellow" />
                <AiFillStar color="yellow" />
                <AiFillStar color="yellow" />
                <AiFillStar color="yellow" />
                <AiFillStar color="yellow" />
              </div>
              <span
                style={{
                  fontWeight: "600",
                }}
              >
                4.62
              </span>
              <span>/5</span>
              <span>(24 luot danh gia)</span>
            </div>
            <ul className="list-unstyled my-4">
              <li className="d-inline border  rounded-5  p-2 mx-2 bg-black">
                <FaGlasses color="white" size={"25px"} />
                <button className="btn-read-story">
                  <Link>Doc truyen</Link>
                </button>
              </li>
              <li className="d-inline border border-3 rounded-5 p-2 mx-2">
                <BsBookmark size={"25px"} />
                <button className="btn-story-bookmark">Danh dau</button>
              </li>
              <li className="d-inline border border-3 rounded-5 p-2 mx-2">
                <GiCottonFlower size={"25px"} />
                <button className="btn-story-suggest">De cu</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="my-4 box-shadow-under-line">
          <ul className="nav nav-fill">
            <li className="nav-item">
              <button className="btn-story-nav-bar active">Gioi thieu</button>
            </li>
            <li className="nav-item">
              <button className="btn-story-nav-bar"> Danh sach chuong</button>
            </li>
            <li className="nav-item">
              <button className="btn-story-nav-bar">Binh luan</button>
            </li>
          </ul>
        </div>
      </div>
      <Comments />
      {/* <Description /> */}
      {/* <ChapterList /> */}
    </div>
  );
};
export default StoryContent;
