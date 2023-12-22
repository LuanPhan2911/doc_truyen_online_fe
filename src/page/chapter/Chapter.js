import { Link, useNavigate, useParams } from "react-router-dom";
import "./Chapter.scss";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { handleGetChapterService } from "../../services/ChapterService";

import ChapterConfig from "../../containers/chapter/ChapterConfig";
import { countWords, formatTime } from "../../utils/Helper";
import Comments from "../../containers/comments/Comments";
import HomeLayout from "../../containers/layouts/HomeLayout";
import _ from "lodash";

const Chapter = () => {
  const { slug, index: chapterIndex } = useParams();
  const selectedFontFamily = useSelector((state) => state.app.fontFamily);
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
  const [chapterReaction, setChapterReaction] = useState({});
  const [countReactions, setCountReactions] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchChapter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterIndex]);

  async function fetchChapter() {
    try {
      let res = await handleGetChapterService(slug, chapterIndex);

      if (res?.success) {
        let { chapter, countChapter, reaction } = res.data;

        setChapter({ ...chapter });
        setCountChapter(countChapter);
        setChapterReaction(reaction);
        let summary = reaction?.summary;
        let countReactionsCp = _.sumBy(summary, "count");
        setCountReactions(countReactionsCp);
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

  const storyId = chapter?.story_id || "";
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
              <span>
                <Link to={`/story/${slug}`} className="text-decoration-none">
                  {chapter?.story?.name}
                </Link>
              </span>
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
              <span> {countReactions} cảm xúc</span>
            </div>
            <div className="chapter-created-at col-lg-2 col-md-6">
              <i className="bi bi-clock"></i>
              <span> {formatTime(chapter?.created_at)}</span>
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
            <ChapterConfig
              storyId={storyId}
              chapterReaction={chapterReaction}
            />
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
