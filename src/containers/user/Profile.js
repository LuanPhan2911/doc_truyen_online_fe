import "./Profile.scss";
import avatarDefault from "../../assets/avatar/default.png";
import { useEffect, useState } from "react";
import { handleGetUser, handleUpdateUser } from "../../services/UserServices";
import { asset } from "../../utils/Helper";

const Profile = () => {
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
  useEffect(() => {
    async function getUser() {
      try {
        let res = await handleGetUser(18);
        if (res?.success) {
          let data = res.data;
          setUser(computed(data));
        }
      } catch (error) {}
    }
    getUser();
  }, []);
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
      avatar: avatarUrl,
      description,
    } = data;
    return {
      name,
      email,
      birthday,
      gender,
      avatarUrl,
      description,
      avatarFile: "",
    };
  }
  const handleChangeInput = (event, name) => {
    let cpUser = user;
    if (name === "avatarFile") {
      cpUser[name] = event.target.files[0];
    } else {
      cpUser[name] = event.target.value;
    }
    setUser({ ...cpUser });
  };
  const OnUpdateUser = async () => {
    let {
      name,
      birthday: birth_date,
      gender,
      avatarFile: avatar,
      description,
    } = user;
    try {
      let res = await handleUpdateUser(18, {
        name,
        birth_date,
        gender,
        description,
        avatar,
      });
      if (res?.success) {
        let data = res.data;
        setUser(computed(data));
      }
    } catch (error) {}
  };
  console.log(user);
  return (
    <div className="profile">
      <div className="avatar">
        <label htmlFor="avatar">
          <img
            src={user.avatarUrl ? asset(user.avatarUrl) : avatarDefault}
            alt="Not found"
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
          onChange={(e) => handleChangeInput(e, "avatarFile")}
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
        <select onChange={(event) => handleChangeInput(event, "gender")}>
          {gender?.length > 0 &&
            gender.map((item) => {
              return (
                <option
                  value={item.value}
                  key={item.value}
                  selected={item.value === user.gender}
                >
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
        <button onClick={() => OnUpdateUser()}>Cập nhật</button>
      </div>
    </div>
  );
};
export default Profile;
