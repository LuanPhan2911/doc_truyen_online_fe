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
    <>
      <div
        className="container-fluid"
        style={{
          color: selectedColor.color,
          backgroundColor: selectedColor.backgroundColor,
        }}
      >
        <Header />
        <div className="d-flex justify-content-between">
          <Link>
            Chuong truoc <AiOutlineArrowLeft />
          </Link>
          <Link>
            Chuong sau <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="h1">{chapter?.name}</div>
        <Link>
          <AiOutlineBook />
          {chapter?.story?.name}
        </Link>

        <div className="row my-3">
          <Link className="col-lg-3 col-sm-6">
            <BsPencilSquare />
            Diep mac
          </Link>
          <span className="col-lg-3 col-sm-6">
            <BsCursorText />
            1333 chu
          </span>
          <span className="col-lg-3 col-sm-6">
            <AiOutlineHeart />
            28 cam xuc
          </span>
          <span className="col-lg-3 col-sm-6">
            <AiOutlineFieldTime />
            {chapter?.created_at}
          </span>
        </div>

        <div className="container">
          <div
            className="card card-body"
            style={{
              color: "inherit",
              backgroundColor: "inherit",
              fontSize: fontSize,
              fontFamily: selectedFontFamily,
            }}
          >
            {chapter?.content}
          </div>
        </div>
      </div>
      <div className="left-menu">
        <ChapterConfig />
      </div>
    </>
  );
};
export default Chapter;
