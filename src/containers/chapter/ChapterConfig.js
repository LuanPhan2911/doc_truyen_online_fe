import { useState } from "react";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";

import "./ChapterConfig.scss";
import ChapterList from "../chapter/ChapterList";
import ChapterControl from "./ChapterControl";
import Modal from "react-bootstrap/Modal";

const ChapterConfig = ({ storyId }) => {
  const menu = [
    {
      id: 1,
      name: "DS. Chương",
      font: <AiOutlineMenu size={"2em"} />,
      component: <ChapterList storyId={storyId} />,
    },
    {
      id: 2,
      name: "Cài đặt",
      font: <AiOutlineSetting size={"2em"} />,
      component: <ChapterControl />,
    },
  ];
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const handleShowModal = (itemId) => {
    let obj = menu.length > 0 && menu.find((item) => item.id === itemId);
    setItem({ ...obj });
    setShow(true);
  };
  return (
    <>
      {
        <ul className="chapter-config-menu">
          {menu?.length > 0 &&
            menu.map((item) => {
              return (
                <li
                  key={item.id}
                  content={item.name}
                  onClick={() => handleShowModal(item.id)}
                >
                  {item.font}
                </li>
              );
            })}
        </ul>
      }
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.component}</Modal.Body>
      </Modal>
    </>
  );
};
export default ChapterConfig;
