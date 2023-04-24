import avatar from "../../assets/stories/150.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";
import ChapterList from "./ChapterList";
import Description from "./Description";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";

const StoryContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [story, setStory] = useState({});
  useEffect(() => {
    setStory({ ...location.state, chapterIndex: 1 });
  }, [location]);
  const [show, setShow] = useState([
    {
      id: 0,
      isShow: true,
    },
    {
      id: 1,
      isShow: false,
    },
    {
      id: 2,
      isShow: false,
    },
  ]);

  const handleShow = ({ id }) => {
    let copyShow = show;
    copyShow =
      copyShow?.length > 0 &&
      copyShow.map((item) => {
        if (item?.id === id) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
        return item;
      });
    setShow(copyShow);
  };
  const handleShowChapter = ({ id: storyId, chapterIndex }) => {
    navigate(`chapter/${chapterIndex}`, {
      state: { storyId, chapterIndex },
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-sm-12">
          <img src={avatar} alt="Not found" width={"100%"} height={"270px"} />
        </div>
        <div className="col-lg-10 col-sm-12">
          <div className="d-flex justify-content-start flex-column">
            <div className="story-title h3">{story?.name}</div>
            <ul className="list-unstyled mt-2">
              <li className="d-inline px-3 border border-3 rounded-5 mx-2 py-1">
                <Link to={"#"} className="global-link text-secondary">
                  Mai bao tieu lang quan
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled d-lg-flex justify-content-lg-start">
              <li className="d-lg-flex flex-lg-column">
                <span>1372</span>
                <span>Chuong</span>
              </li>
              <li className="d-lg-flex flex-lg-column">
                <span>11</span>
                <span>Chuong/ tuan</span>
              </li>
              <li className="d-lg-flex flex-lg-column">
                <span>95.5k</span>
                <span>Luot doc</span>
              </li>
              <li className="d-lg-flex flex-lg-column">
                <span>1000</span>
                <span>Cat tru</span>
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
              <span>4.62</span>
              <span>/5</span>
              <span>(24 luot danh gia)</span>
            </div>
            <ul className="list-unstyled d-flex flex-lg-row justify-content-lg-start">
              <li className="bg-primary rounded-pill d-flex flex-column align-items-center justify-content-center">
                <FaGlasses color="white" />
                <button
                  className="btn-read-story"
                  onClick={() => handleShowChapter(story)}
                >
                  Doc truyen
                </button>
              </li>
              <li className="rounded-pill bg-info d-flex flex-column align-items-center justify-content-center">
                <BsBookmark />
                <button className="btn-story-bookmark">Danh dau</button>
              </li>
              <li className="rounded-pill bg-success d-flex flex-column align-items-center justify-content-center">
                <GiCottonFlower />
                <button className="btn-story-suggest">De cu</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="box-shadow-under-line">
          <ul className="nav nav-fill">
            <li className="nav-item">
              <button
                className={
                  show[0].isShow
                    ? "btn-story-nav-bar active"
                    : "btn-story-nav-bar"
                }
                onClick={() => handleShow({ id: 0 })}
              >
                Gioi thieu
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  show[1].isShow
                    ? "btn-story-nav-bar active"
                    : "btn-story-nav-bar"
                }
                onClick={() => handleShow({ id: 1 })}
              >
                {" "}
                Chuong
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  show[2].isShow
                    ? "btn-story-nav-bar active"
                    : "btn-story-nav-bar"
                }
                onClick={() => handleShow({ id: 2 })}
              >
                Binh luan
              </button>
            </li>
          </ul>
        </div>
      </div>

      {show[0].isShow ? (
        <Description description={story?.description} />
      ) : (
        <></>
      )}
      {show[1].isShow ? <ChapterList /> : <></>}
      {show[2].isShow ? <Comments /> : <></>}
    </div>
  );
};
export default StoryContent;
