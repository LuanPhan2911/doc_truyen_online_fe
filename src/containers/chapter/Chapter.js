import { useNavigate, useParams } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Chapter.scss";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { handleGetChapterService } from "../../services/ChapterService";

import ChapterConfig from "./ChapterConfig";
import { countWords, diffTime } from "../../utils/Helper";
import Comments from "../comments/Comments";
import HomeLayout from "../layouts/HomeLayout";

const Chapter = () => {
  const { slug, index: chapterIndex } = useParams();
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
      let res = await handleGetChapterService(slug, chapterIndex);

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
        pathname: `/story/${slug}/chapter/${index - 1}`,
      });
    }
  };
  const handleNextChapter = () => {
    const index = Number(chapterIndex);
    if (index < Number(countChapter)) {
      navigate({
        pathname: `/story/${slug}/chapter/${index + 1}`,
      });
    }
  };
  return (
    <HomeLayout
      color={selectedColor.color}
      backgroundColor={selectedColor.backgroundColor}
    >
      <div
        className="chapter-main"
        style={{
          color: selectedColor.color,
          backgroundColor: selectedColor.backgroundColor,
        }}
      >
        <div className="chapter container">
          <div className="chapter-pre-next">
            <div className="chapter-pre" onClick={() => handlePreChapter()}>
              <i className="bi bi-arrow-left"></i> <span>Chương trước</span>
            </div>
            <div className="chapter-next" onClick={() => handleNextChapter()}>
              <span className="chapter-next">Chương sau</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="chapter-name">{chapter?.name}</div>
          <div className="chapter-story-info row">
            <div className="story-name col-lg-3 col-md-6">
              <i className="bi bi-book"></i>
              <span>{chapter?.story?.name}</span>
            </div>
            <div className="auth-name col-lg-3 col-md-6">
              <i className="bi bi-pencil"></i>
              <span>{chapter?.story?.author_name}</span>
            </div>
            <div className="chapter-word-count col-lg-2 col-md-6">
              <i className="bi bi-textarea"></i>
              <span> {countWords(chapter?.content)} chữ</span>
            </div>
            <div className="chapter-liked col-lg-2 col-md-6">
              <i className="bi bi-heart"></i>
              <span> 28 cảm xúc</span>
            </div>
            <div className="chapter-created-at col-lg-2 col-md-6">
              <i className="bi bi-clock"></i>
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
              minHeight: "50vh",
            }}
          >
            {chapter?.content}
          </div>
          <div className="chapter-pre-next">
            <div className="chapter-pre" onClick={() => handlePreChapter()}>
              <i className="bi bi-arrow-left"></i>
              <span>Chương trước</span>
            </div>
            <div className="chapter-next" onClick={() => handleNextChapter()}>
              <span className="chapter-next">Chương sau</span>
              <i className="bi bi-arrow-right"></i>
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
    </HomeLayout>
  );
};
export default Chapter;
