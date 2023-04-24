import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-5 border-top">
        <div className="w-100 m-auto">
          Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được
          convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất
          nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể
          loại tiên hiệp, kiếm hiệp, huyền ảo ...
        </div>

        <ul className="list-unstyled d-lg-flex d-sm-flex flex-lg-row flex-sm-column justify-content-lg-evenly">
          <li className="border-bottom">Dieu khoan dich vu</li>
          <li className="border-bottom">Chinh sach bao mat</li>
          <li className="border-bottom">Ve bang quyen</li>
          <li className="border-bottom">Huong dan su dung</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
