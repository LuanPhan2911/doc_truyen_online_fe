import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <Link to={"/"} className="logo">
        <img src={logo} alt="Not found"></img>
      </Link>
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
