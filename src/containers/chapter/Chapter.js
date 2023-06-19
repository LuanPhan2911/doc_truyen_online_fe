import { Link, useLocation } from "react-router-dom";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BsPencilSquare, BsCursorText } from "react-icons/bs";
import "./Chapter.scss";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { handleGetChapterService } from "../../services/ChapterService";
import Header from "../../components/Header";
import ChapterConfig from "./ChapterConfig";

const Chapter = () => {
  const location = useLocation();
  const selectedFontFamily = useSelector((state) => state.app.fontFamily);
  const selectedColor = useSelector((state) => {
    return {
      color: state.app.color,
      backgroundColor: state.app.backgroundColor,
    };
  });
  const fontSize = useSelector((state) => state.app.fontSize);
  const [chapter, setChapter] = useState({});

  useEffect(() => {
    async function fetch() {
      try {
        let res = await handleGetChapterService({ ...location.state });
        if (res?.success) {
          setChapter({ ...res?.data });
        }
      } catch (error) {}
    }
    fetch();
  }, [location]);

  return (
    <div
      className="chapter-main"
      style={{
        color: selectedColor.color,
        backgroundColor: selectedColor.backgroundColor,
      }}
    >
      <Header
        color={selectedColor.color}
        backgroundColor={selectedColor.backgroundColor}
      />
      <div className="chapter">
        <div className="chapter-pre-next">
          <div className="chapter-pre">
            <AiOutlineArrowLeft size={"1.5em"} /> <span>Chương trước</span>
          </div>
          <div className="chapter-next">
            <span className="chapter-next">Chương sau</span>
            <AiOutlineArrowRight size={"1.5em"} />{" "}
          </div>
        </div>
        <div className="chapter-name">{chapter?.name}</div>
        <div className="chapter-story-info">
          <div className="story-name">
            <AiOutlineBook size={"1.5em"} />
            <span>{chapter?.story?.name}</span>
          </div>
          <div className="auth-name">
            <BsPencilSquare size={"1.5em"} />
            <span>Diệp Mặc</span>
          </div>
          <div className="chapter-word-count">
            <BsCursorText size={"1.5em"} />
            <span> 1333 chữ</span>
          </div>
          <div className="chapter-liked">
            <AiOutlineHeart size={"1.5em"} />
            <span> 28 cảm xúc</span>
          </div>
          <div className="chapter-created-at">
            <AiOutlineFieldTime size={"1.5em"} />
            <span> {chapter?.created_at}</span>
          </div>
        </div>

        <div
          className="chapter-content"
          style={{
            color: "inherit",
            backgroundColor: "inherit",
            fontSize: fontSize,
            fontFamily: selectedFontFamily,
          }}
        >
          {chapter?.content}
          <div className="chapter-pre-next">
            <div className="chapter-pre">
              <AiOutlineArrowLeft size={"1.5em"} /> <span>Chương trước</span>
            </div>
            <div className="chapter-next">
              <span className="chapter-next">Chương sau</span>
              <AiOutlineArrowRight size={"1.5em"} />{" "}
            </div>
          </div>
        </div>

        <div className="chapter-config">
          <ChapterConfig />
        </div>
      </div>
    </div>
  );
};
export default Chapter;
