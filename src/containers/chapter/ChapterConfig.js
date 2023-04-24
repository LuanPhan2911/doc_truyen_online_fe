import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeFontFamily,
  changeFontSize,
} from "../../features/appSlice";
import { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import {
  AiOutlineFontColors,
  AiOutlineFontSize,
  AiOutlineMenu,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import PopoverBase from "../../components/PopoverBase";
const colorData = [
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

const ChapterConfig = () => {
  const dispatch = useDispatch();
  const [colors] = useState([...colorData]);
  const fontSize = useSelector((state) => state.app.fontSize);

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
  const ChapterList = (
    <PopoverBase>
      {{
        header: <div>Chapterlist</div>,
        body: <div>Chapter...</div>,
      }}
    </PopoverBase>
  );
  const Setting = (
    <PopoverBase>
      {{
        header: <div>Setting</div>,
        body: (
          <div>
            <div className="control">
              <div className="change-color card card-body">
                <div className="background">
                  <IoColorPaletteOutline className="icon" />
                  Màu nền
                </div>
                <div className="colors">
                  {colors?.length > 0 &&
                    colors.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className="color-item"
                          style={{
                            backgroundColor: item.backgroundColor,
                          }}
                          onClick={() => handleChangeColor(item)}
                        ></button>
                      );
                    })}
                </div>
              </div>
              <div className="change-font-family card card-body">
                <div className="font-family-title">
                  <AiOutlineFontColors className="icon" />
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
              <div className="change-font-size card card-body">
                <div className="font-size-title">
                  <AiOutlineFontSize className="icon" />
                  Cở chữ
                </div>
                <div className="font-size">
                  <AiOutlineMinus
                    className="icon"
                    onClick={() => handleChangeFontSize("minus")}
                  />
                  {fontSize}
                  <AiOutlinePlus
                    className="icon"
                    onClick={() => handleChangeFontSize("plus")}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      }}
    </PopoverBase>
  );
  return (
    <>
      <OverlayTrigger trigger="click" placement="left" overlay={ChapterList}>
        <button className="chapter-list">
          <AiOutlineMenu />
        </button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="left" overlay={Setting}>
        <button className="setting">
          <AiOutlineSetting />
        </button>
      </OverlayTrigger>
    </>
  );
};
export default ChapterConfig;
