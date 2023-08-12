import { useNavigate, useParams } from "react-router-dom";

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

import ChapterConfig from "./ChapterConfig";
import Header from "../Home/Header";
import { countWords, diffTime } from "../../utils/Helper";
import Comments from "../comments/Comments";

const Chapter = () => {
  const { name, index: chapterIndex } = useParams();
  const selectedFontFamily = useSelector((state) => state.app.fontFamily);
  const [storyId, setStoryId] = useState("");
  const navigate = useNavigate();
  const selectedColor = useSelector((state) => {
    return {
      color: state.app.color,
      backgroundColor: state.app.backgroundColor,
    };
  });
  const fontSize = useSelector((state) => state.app.fontSize);
  const [chapter, setChapter] = useState("");
  const [countChapter, setCountChapter] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchChapter();
  }, [chapterIndex]);

  async function fetchChapter() {
    try {
      let res = await handleGetChapterService(name, chapterIndex);

      if (res?.success) {
        let { chapter, count, storyId } = res.data;

        setChapter({ ...chapter });
        setCountChapter(count);
        setStoryId(storyId);
      }
    } catch (error) {}
  }

  const handlePreChapter = () => {
    const index = Number(chapterIndex);

    if (index > 1) {
      navigate({
        pathname: `/story/${name}/chapter/${index - 1}`,
      });
    }
  };
  const handleNextChapter = () => {
    const index = Number(chapterIndex);
    if (index < Number(countChapter)) {
      navigate({
        pathname: `/story/${name}/chapter/${index + 1}`,
      });
    }
  };
  return (
    <div
      className="chapter-main"
      style={{
        color: selectedColor.color,
        backgroundColor: selectedColor.backgroundColor,
      }}
    >
      <Header />
      <div className="chapter">
        <div className="chapter-pre-next">
          <div className="chapter-pre" onClick={() => handlePreChapter()}>
            <AiOutlineArrowLeft size={"1.5em"} /> <span>Chương trước</span>
          </div>
          <div className="chapter-next" onClick={() => handleNextChapter()}>
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
            <span>{chapter?.story?.author_name}</span>
          </div>
          <div className="chapter-word-count">
            <BsCursorText size={"1.5em"} />
            <span> {countWords(chapter?.content)} chữ</span>
          </div>
          <div className="chapter-liked">
            <AiOutlineHeart size={"1.5em"} />
            <span> 28 cảm xúc</span>
          </div>
          <div className="chapter-created-at">
            <AiOutlineFieldTime size={"1.5em"} />
            <span> {diffTime(chapter?.created_at)}</span>
          </div>
        </div>

        <div
          className="chapter-content line-break"
          style={{
            color: "inherit",
            backgroundColor: "inherit",
            fontSize: fontSize,
            fontFamily: selectedFontFamily,
          }}
        >
          {chapter?.content}
          <div className="chapter-pre-next">
            <div className="chapter-pre" onClick={() => handlePreChapter()}>
              <AiOutlineArrowLeft size={"1.5em"} /> <span>Chương trước</span>
            </div>
            <div className="chapter-next" onClick={() => handleNextChapter()}>
              <span className="chapter-next">Chương sau</span>
              <AiOutlineArrowRight size={"1.5em"} />{" "}
            </div>
          </div>
        </div>

        <div className="chapter-config">
          <ChapterConfig storyId={storyId} />
        </div>
      </div>
      <div className="container">
        <Comments storyId={storyId} />
      </div>
    </div>
  );
};
export default Chapter;
