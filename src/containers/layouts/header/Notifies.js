import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import "./Notifies.scss";
import { Link } from "react-router-dom";
import { handleGetNotifiesService } from "../../../services/UserServices";
import { useSelector } from "react-redux";
import { asset } from "../../../utils/Helper";
const Notifies = () => {
  const userId = useSelector((state) => state.user.id);
  const [notifies, setNotifies] = useState([]);
  const [newNotifyCount, setNewNotifyCount] = useState(0);
  useEffect(() => {
    async function fetchNotify() {
      try {
        let res = await handleGetNotifiesService(userId);
        if (res?.success) {
          let { notifies, new_notifies_count } = res.data;
          setNotifies([...notifies]);
          setNewNotifyCount(new_notifies_count);
        }
      } catch (error) {}
    }
    fetchNotify();
  }, []);

  const handleShowStory = () => {};
  return (
    <DropdownBase minWidth="400px">
      {{
        btn: (
          <span className="btn-dropdown">
            Thông báo{" "}
            {newNotifyCount > 0 && (
              <span className="text-danger">{newNotifyCount}</span>
            )}
          </span>
        ),
        body: (
          <div className="user-notify">
            <div className="d-flex justify-content-around">
              <h6>Thông báo</h6>
              <Link to={"/user/notify"} className="link-success">
                Xem tất cả
              </Link>
            </div>
            {notifies?.length === 0 && <span>Không có thông báo mới</span>}
            <div className="notify-content">
              {notifies?.length > 0 &&
                notifies.map((item) => {
                  return (
                    <div
                      className="row notify-item"
                      onClick={() => handleShowStory(item)}
                    >
                      <div className="col-3">
                        <img
                          alt="?"
                          src={item?.story?.avatar && asset(item?.story.avatar)}
                          className="avatar"
                        />
                      </div>
                      <div className="col-9">
                        <div className="name">{item?.story.name}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ),
      }}
    </DropdownBase>
  );
};
export default Notifies;
