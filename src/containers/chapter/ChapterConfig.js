import { useState } from "react";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";

import "./ChapterConfig.scss";
import ChapterList from "../story/ChapterList";
import Dialog from "../../components/Dialog";
import { useEffect } from "react";

import ChapterControl from "./ChapterControl";
import { useDialog } from "../../hooks/useDialog";
const ChapterConfig = () => {
  // const { menu, item, setItem, handleShowDialog } = useDialog([
  //   {
  //     id: 1,
  //     name: "DS. Chương",
  //     show: false,
  //     font: <AiOutlineMenu size={"2em"} />,
  //     component: <ChapterList />,
  //   },
  //   {
  //     id: 2,
  //     name: "Cài đặt",
  //     show: false,
  //     font: <AiOutlineSetting size={"2em"} />,
  //     component: <ChapterControl />,
  //   },
  // ]);

  return (
    <>
      {/* <ul className="chapter-config-menu">
        {menu?.length > 0 &&
          menu.map((item) => {
            return (
              <li
                key={item.id}
                content={item.name}
                onClick={() => handleShowDialog(item.id)}
              >
                {item.font}
              </li>
            );
          })}
      </ul>
      {item ? <Dialog item={item} setItem={setItem} /> : <></>} */}
    </>
  );
};
export default ChapterConfig;
