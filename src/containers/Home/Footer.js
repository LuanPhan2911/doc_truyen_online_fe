import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import bg from "../../assets/background/footer-bg.png";
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
      <div className="text">
        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được
        convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất
        nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại
        tiên hiệp, kiếm hiệp, huyền ảo ...
      </div>

      <ul>
        <li>Điều khoảng dịch vụ</li>
        <li>Chính sách bảo mật</li>
        <li>Về bản quyền</li>
        <li>Hướng dẫn sử dụng</li>
      </ul>
    </div>
  );
};
export default Footer;
