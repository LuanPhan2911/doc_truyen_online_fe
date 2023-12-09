import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeFontFamily,
  changeFontSize,
} from "../../features/appSlice";
import "./ChapterControl.scss";
const ChapterControl = () => {
  const dispatch = useDispatch();
  const fontSize = useSelector((state) => state.app.fontSize);
  const colors = [
    {
      id: 1,
      backgroundColor: "#a99d9d",
      color: "#000",
    },
    {
      id: 2,
      backgroundColor: "#a9a28d",
      color: "#000",
    },
    {
      id: 3,
      backgroundColor: "#9ca49c",
      color: "#000",
    },
    {
      id: 4,
      backgroundColor: "#9ba0a0",
      color: "#000",
    },
    {
      id: 5,
      backgroundColor: "#a29d92",
      color: "#000",
    },
    {
      id: 6,
      backgroundColor: "#9e9d9a",
      color: "#000",
    },
    {
      id: 7,
      backgroundColor: "#171717",
      color: "#fff",
    },
    {
      id: 8,
      backgroundColor: "#fff",
      color: "#000",
    },
  ];
  const fontFamily = [
    "Palatino Linotype",
    "Times New Roman",
    "Verdana",
    "Tahoma",
    "Arial",
  ];
  const handleChangeFontSize = (id) => {
    let copyFontSize = fontSize;
    if (fontSize <= 12) {
      if (id === "plus") {
        copyFontSize++;
      }
      dispatch(changeFontSize(copyFontSize));
      return;
    }
    if (fontSize >= 30) {
      if (id === "minus") {
        copyFontSize--;
      }
      dispatch(changeFontSize(copyFontSize));
      return;
    }
    if (id === "plus") {
      copyFontSize++;
    }
    if (id === "minus") {
      copyFontSize--;
    }
    dispatch(changeFontSize(copyFontSize));
  };
  const handleChangeColor = (item) => {
    let { color, backgroundColor } = item;
    // setSelectedColor(obj);
    dispatch(
      changeColor({
        color,
        backgroundColor,
      })
    );
  };
  const handleChangeFontFamily = (e) => {
    let fontFamily = e.target.value;
    dispatch(changeFontFamily(fontFamily));
  };
  return (
    <div className="control-chapter-popup">
      <div className="change-color">
        <div className="background">
          <i className="bi bi-palette"></i>
          Màu nền
        </div>
        <div className="colors">
          {colors?.length > 0 &&
            colors.map((item, index) => {
              return (
                <div
                  key={index}
                  className="color-item shadow"
                  style={{
                    backgroundColor: item.backgroundColor,
                  }}
                  onClick={() => handleChangeColor(item)}
                ></div>
              );
            })}
        </div>
      </div>
      <div className="change-font-family">
        <div className="font-family-title">
          <i className="bi bi-code-slash"></i>
          Phong chữ
        </div>
        <div className="font-family">
          <select
            className="form-control"
            onChange={(e) => handleChangeFontFamily(e)}
          >
            {fontFamily?.length > 0 &&
              fontFamily.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="change-font-size">
        <div className="font-size-title">
          <i className="bi bi-file-font"></i>
          Cở chữ
        </div>
        <div className="font-size text-decoration-underline">
          <i
            className="bi bi-dash-circle"
            onClick={() => handleChangeFontSize("minus")}
          ></i>
          {fontSize}
          <i
            className="bi bi-plus-circle"
            onClick={() => handleChangeFontSize("plus")}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default ChapterControl;
