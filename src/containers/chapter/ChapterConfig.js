import { useState } from "react";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";

import "./ChapterConfig.scss";
import ChapterList from "../story/ChapterList";
import Dialog from "../../components/Dialog";
import { useEffect } from "react";

import ChapterControl from "./ChapterControl";

const ChapterConfig = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "DS. Chương",
      showContent: false,
      font: <AiOutlineMenu size={"2em"} />,
      component: <ChapterList />,
    },
    {
      id: 2,
      name: "Cài đặt",
      showContent: false,
      font: <AiOutlineSetting size={"2em"} />,
      component: <ChapterControl />,
    },
  ]);
  const [item, setItem] = useState({});

  useEffect(() => {
    handleGetItemShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  function handleGetItemShow() {
    let cpMenu = menu;
    let obj =
      cpMenu?.length > 0 && cpMenu.find((item) => item.showContent === true);
    setItem({ ...obj });
  }
  const handleShowDialog = (itemId) => {
    let cpMenu = menu;
    cpMenu?.length > 0 &&
      cpMenu.forEach((item) => {
        if (item.id === itemId) {
          item.showContent = true;
        } else {
          item.showContent = false;
        }
      });

    setShowDialog(true);
    setMenu([...cpMenu]);
  };

  return (
    <>
      <ul className="chapter-config-menu">
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
      {item ? (
        <Dialog
          show={showDialog}
          setShow={setShowDialog}
          title={item.name}
          body={item.component}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ChapterConfig;
