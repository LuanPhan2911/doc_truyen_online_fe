import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import bg from "../assets/background/footer-bg.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Link to={"/"} className="logo">
        <img src={logo} alt="Not found"></img>
      </Link>
      <div className="w-100 text-center mb-3">
        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được
        convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất
        nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại
        tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>

      <ul className="list-unstyled ">
        <li className="border-bottom">Điều khoảng dịch vụ</li>
        <li className="border-bottom">Chính sách bảo mật</li>
        <li className="border-bottom">Về bản quyền</li>
        <li className="border-bottom">Hướng dẫn sử dụng</li>
      </ul>
    </div>
  );
};
export default Footer;
