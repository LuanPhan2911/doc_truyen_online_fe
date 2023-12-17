import "./Profile.scss";
import avatarDefault from "../../assets/avatar/default.png";
import { useEffect, useRef, useState } from "react";
import { handleGetUser, handleUpdateUser } from "../../services/UserServices";
import { asset } from "../../utils/Helper";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { update } from "../../features/userSlice";
import HomeLayout from "../layouts/HomeLayout";
import { useParams } from "react-router-dom";

const Profile = () => {
  const imgRef = useRef();
  const { id: userId } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    avatarUrl: "",
    avatarFile: "",
    name: "",
    birthday: "",
    gender: "",
    description: "",
    email: "",
  });
  const [gender] = useState([
    {
      value: 0,
      name: "Nam",
    },
    {
      value: 1,
      name: "Nữ",
    },
    {
      value: "",
      name: "Khác",
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUser() {
      try {
        let res = await handleGetUser(userId);
        if (res?.success) {
          let data = res.data;
          setUser(computed(data));
        }
      } catch (error) {}
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!user.avatarFile) {
      return;
    }
    const avatarUrl = URL.createObjectURL(user.avatarFile);
    let { current: img } = imgRef;
    img.src = avatarUrl;
    return () => {
      URL.revokeObjectURL(avatarUrl);
    };
  }, [user.avatarFile]);
  function computed(data) {
    for (const key in data) {
      if (data[key] === null) {
        data[key] = "";
      }
    }
    let {
      name,
      email,
      birth_date: birthday,
      gender,
      description,
      avatar: avatarUrl,
    } = data;

    return {
      name,
      email,
      birthday,
      gender,
      description,
      avatarFile: "",
      avatarUrl,
    };
  }
  const handleChangeInput = (event, name) => {
    let cpUser = user;
    cpUser[name] = event.target.value;
    setUser({ ...cpUser });
  };
  const OnUpdateUser = async () => {
    setLoading(true);
    let {
      name,
      birthday: birth_date,
      gender,
      avatarFile: avatar,
      description,
    } = user;
    try {
      const res = await toast.promise(
        handleUpdateUser(userId, {
          name,
          birth_date,
          gender,
          description,
          avatar,
        }),
        {
          pending: "Đang cập nhật người dùng",
          success: "Cập nhật thành công 👌",
          error: "Cập nhật thất bại 🤯",
        }
      );
      if (res?.success) {
        let data = res.data;
        dispatch(
          update({
            name: data.name,
            avatar: data.avatar,
          })
        );
        setUser(computed(data));
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleChangeAvatar = (e) => {
    let avatarFile = e.target.files[0];
    let cpUser = user;
    cpUser["avatarFile"] = avatarFile;
    setUser({ ...cpUser });
  };
  return (
    <HomeLayout>
      <div className="profile">
        <div className="avatar">
          <label htmlFor="avatar">
            <img
              src={user.avatarUrl ? asset(user.avatarUrl) : avatarDefault}
              alt="Not found"
              ref={imgRef}
            ></img>
            <span className="note">
              Ấn vào ảnh đại diện để cập nhật ảnh đại diện
            </span>
          </label>

          <input
            type="file"
            id="avatar"
            name="avatar"
            hidden
            accept="image/*"
            onChange={(e) => handleChangeAvatar(e)}
          />
        </div>
        <div className="user-name">
          <label>Tên hiển thị</label>
          <input
            value={user.name}
            onChange={(event) => handleChangeInput(event, "name")}
            type="text"
          />
        </div>
        <div className="user-birthday">
          <label>Năm sinh</label>
          <input
            value={user.birthday}
            type="number"
            onChange={(event) => handleChangeInput(event, "birthday")}
          />
        </div>
        <div className="user-gender">
          <label>Giới tính</label>
          <select
            onChange={(event) => handleChangeInput(event, "gender")}
            value={user.gender}
          >
            {gender?.length > 0 &&
              gender.map((item) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="user-description">
          <label>Giới thiệu ngắn</label>
          <textarea
            rows={"3"}
            value={user.description}
            onChange={(e) => handleChangeInput(e, "description")}
          ></textarea>
        </div>
        <div className="user-email">
          <label>Email</label>
          <input value={user.email} disabled />
          <span className="note">
            Lưu ý: nếu đổi email phải vào email cũ xác nhận thì mới có hiệu lực
          </span>
        </div>
        <div className="btn-update">
          <button onClick={() => OnUpdateUser()} disabled={loading}>
            Cập nhật
          </button>
        </div>
      </div>
    </HomeLayout>
  );
};
export default Profile;
