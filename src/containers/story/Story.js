import { BsVectorPen } from "react-icons/bs";
import { Link } from "react-router-dom";
import image from "../../assets/stories/150.jpg";
const Story = () => {
  return (
    <div className="col-6 p-3">
      <div className="row">
        <div className="image col-3">
          <Link to={"/story/abc"} className="story-image">
            <img
              src={image}
              alt="Not found"
              width={"72px"}
              className="story-image"
            />
          </Link>
        </div>
        <div className="info col-9">
          <div className="name">
            <Link to={"/story/abc"} className="story-title m-2">
              Tien gia
            </Link>
          </div>
          <div className="story-description m-2">
            Cái gọi là tiên giả? Giới Vực phàm nhân biến thành, lấy thiên địa
            chi tinh hoa, thoát thể xác
          </div>
          <div className="d-flex align-items-center mt-2 py-1 justify-content-between">
            <div className="d-flex align-items-center mr-auto text-secondary">
              <span className="truncate-140 text-left">
                <BsVectorPen /> Kinh Đào Hãi Lãng{" "}
              </span>
            </div>
            <Link to={"#"}>
              <span className="d-inline-block border border-primary small px-2 text-primary truncate-100">
                Tiên Hiệp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Story;
