import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeFontFamily,
  changeFontSize,
} from "../../features/appSlice";
import "./ChapterControl.scss";
const ChapterControl = () => {
  const dispatch = useDispatch();
  const { fontSize, colors, fontsFamily } = useSelector((state) => state.app);

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
          <i className="bi bi-palette me-2"></i>
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
          <i className="bi bi-code-slash me-2"></i>
          Phong chữ
        </div>
        <div className="font-family">
          <select
            className="form-control"
            onChange={(e) => handleChangeFontFamily(e)}
          >
            {fontsFamily?.length > 0 &&
              fontsFamily.map((item, index) => {
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
          <i className="bi bi-file-font me-2"></i>
          Cở chữ
        </div>
        <div className="font-size">
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
