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
import "./ChapterConfig.scss";
import ChapterList from "../story/ChapterList";
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
  const ChapterListPopup = (
    <PopoverBase>
      {{
        body: <ChapterList />,
      }}
    </PopoverBase>
  );
  const SettingPopup = (
    <PopoverBase>
      {{
        header: <div className="title-popup">Setting</div>,
        body: (
          <div className="control-popup">
            <div className="change-color">
              <div className="background">
                <IoColorPaletteOutline size={"1.5em"} />
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
            <div className="change-font-family">
              <div className="font-family-title">
                <AiOutlineFontColors size={"1.5em"} />
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
                <AiOutlineFontSize size={"1.5em"} />
                Cở chữ
              </div>
              <div className="font-size">
                <AiOutlineMinus
                  size={"1.5em"}
                  onClick={() => handleChangeFontSize("minus")}
                />
                {fontSize}
                <AiOutlinePlus
                  size={"1.5em"}
                  onClick={() => handleChangeFontSize("plus")}
                />
              </div>
            </div>
          </div>
        ),
      }}
    </PopoverBase>
  );
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="left"
        overlay={ChapterListPopup}
      >
        <div className="chapter-list-popup">
          <AiOutlineMenu size={"2em"} />
        </div>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="left" overlay={SettingPopup}>
        <div className="chapter-setting-popup">
          <AiOutlineSetting size={"2em"} />
        </div>
      </OverlayTrigger>
    </>
  );
};
export default ChapterConfig;
