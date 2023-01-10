import story from "../../assets/stories/150.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const StoryContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={story} alt="Not found" width={"100%"} height={"270px"} />
        </div>
        <div className="col-10">
          <div className="d-flex justify-content-start flex-column">
            <div className="title">Dai cang truong sinh</div>
            <ul className="list-unstyled d-flex flex-row">
              <li className="px-3 border border-1 rounded-3 mx-2">Tieu thu</li>
              <li className="px-3 border border-1 rounded-3 mx-2">Tieu thu</li>
              <li className="px-3 border border-1 rounded-3 mx-2">Tieu thu</li>
              <li className="px-3 border border-1 rounded-3 mx-2">Tieu thu</li>
              <li className="px-3 border border-1 rounded-3 mx-2">Tieu thu</li>
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
            <ul className="list-unstyled d-flex">
              <li className="mx-2">
                <Link
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#b78a28",
                    color: "rgb(255, 255, 255)",
                    textDecoration: "none",
                    height: "70px",
                  }}
                >
                  Doc truyen
                </Link>
              </li>
              <li className="mx-2">
                <button>Danh dau</button>
              </li>
              <li className="mx-2">
                <button>De cu</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoryContent;
