import { useEffect, useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
import "./Notifies.scss";
import { Link } from "react-router-dom";
import { handleGetNotifiesService } from "../../../services/UserServices";
import { asset } from "../../../utils/Helper";
const Notifies = () => {
  const [notifies, setNotifies] = useState([]);
  useEffect(() => {
    async function fetchNotify() {
      try {
        let res = await handleGetNotifiesService();
        if (res?.success) {
          setNotifies(res.data);
        }
      } catch (error) {}
    }
    fetchNotify();
  }, []);

  return (
    <DropdownBase minWidth="400px">
      <DropdownBase.Button>
        {" "}
        <button className="btn-dropdown dropdown-toggle position-relative">
          Thông báo{" "}
        </button>
      </DropdownBase.Button>
      <DropdownBase.Body>
        <div className="user-notify">
          <div className="d-flex justify-content-around">
            <h6>Thông báo</h6>
            <Link to={"/user/notify"} className="text-decoration-none">
              Xem tất cả
            </Link>
          </div>
          {notifies?.length === 0 && (
            <div className="text-center text-primary">
              Không có thông báo mới
            </div>
          )}
          <div className="notify-content">
            {notifies?.length > 0 &&
              notifies.map((item) => {
                return (
                  <div className="row notify-item">
                    <div className="col-3">
                      <img
                        alt="?"
                        src={item?.story?.avatar && asset(item?.story?.avatar)}
                        className="avatar"
                      />
                    </div>
                    <div className="col-9">
                      <div className="name">{item?.story.name}</div>
                      <div className="chapter-name fs-small">
                        <Link
                          to={`/story/${item?.story?.slug}/chapter/${item?.index}`}
                          className="text-decoration-none"
                        >
                          {item?.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </DropdownBase.Body>
    </DropdownBase>
  );
};
export default Notifies;
