import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="container text-center py-5">
      <Link to={"/"}>
        <img src={logo} alt="Not found" width={"64px"} height={"64px"} />
      </Link>
      <div className="w-75 m-auto">
        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được
        convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất
        nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại
        tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>
      <div className="m-auto">
        <ul className="list-unstyled d-flex justify-content-center">
          <li className="px-2">Dieu khoan dich vu</li>
          <li className="px-2">Chinh sach bao mat</li>
          <li className="px-2">Ve bang quyen</li>
          <li className="px-2">Huong dan su dung</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
