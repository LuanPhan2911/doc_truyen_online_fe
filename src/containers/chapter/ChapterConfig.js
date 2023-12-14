import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import "./ChapterConfig.scss";
import ChapterList from "../chapter/ChapterList";
import ChapterControl from "./ChapterControl";
import Modal from "react-bootstrap/Modal";
import useModal from "../../hooks/useModal";
import { useSelector } from "react-redux";
import ChapterReaction from "./ChapterReaction";
import _ from "lodash";
const ChapterConfig = ({ storyId, chapterReaction }) => {
  const [userReacted, setUserReacted] = useState({});
  const [reactionSummary, setReactionSummary] = useState([]);
  const reactions = useSelector((state) => state.app.reactions);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    if (!_.isEmpty(chapterReaction)) {
      setUserReacted(chapterReaction?.user);
      setReactionSummary(chapterReaction?.summary);
    }
  }, [chapterReaction]);
  const getComponentReaction = (name) => {
    let reaction = reactions?.find((item) => item.id === name) || {};

    if (_.isEmpty(reaction)) {
      return <AiFillHeart size={"2em"} />;
    } else {
      return (
        <img
          src={reaction?.font}
          alt="not-found"
          style={{
            width: "32px",
            height: "32px",
          }}
        ></img>
      );
    }
  };
  const menu = [
    {
      id: 1,
      name: "DS. Chương",
      font: <AiOutlineMenu size={"2em"} />,
      component: <ChapterList storyId={storyId} />,
      isAuth: false,
    },
    {
      id: 2,
      name: "Cài đặt",
      font: <AiOutlineSetting size={"2em"} />,
      component: <ChapterControl />,
      isAuth: false,
    },
    {
      id: 3,
      name: "Cảm xúc",
      font: userReacted?.name ? (
        getComponentReaction(userReacted?.name)
      ) : (
        <AiFillHeart size={"2em"} />
      ),
      component: (
        <ChapterReaction
          reactionSummary={reactionSummary}
          setReactionSummary={setReactionSummary}
          setUserReacted={setUserReacted}
          userReacted={userReacted}
          onClose={onClose}
        />
      ),
      isAuth: true,
    },
  ];
  const [item, handleShow, handleClose] = useModal({
    isShow,
    setShow,
    menu,
  });
  function onClose() {
    handleClose();
  }

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
                  onClick={
                    item.isAuth
                      ? () => handleShow(item.id, isAuth)
                      : () => handleShow(item.id)
                  }
                >
                  {item.font}
                </li>
              );
            })}
        </ul>
      }
      <Modal show={isShow} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.component}</Modal.Body>
      </Modal>
    </>
  );
};
export default ChapterConfig;
