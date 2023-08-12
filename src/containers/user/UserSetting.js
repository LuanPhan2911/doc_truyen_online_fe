import Profile from "./Profile";
import "./UserSetting.scss";
const UserSetting = () => {
  return (
    <div className="user-setting">
      <ul className="user-actions">
        <li>Hồ sơ</li>
        <li>Tủ truyện</li>
        <li>Cài đặt</li>
        <li>Thông báo</li>
        <li>Trợ giúp và báo lỗi</li>
      </ul>
      <Profile />
    </div>
  );
};
export default UserSetting;
