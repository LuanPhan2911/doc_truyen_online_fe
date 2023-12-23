import { useParams } from "react-router-dom";
import { postChapterReaction } from "../../services/ChapterService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

const ChapterReaction = ({
  userReacted,
  setReactionSummary,
  setUserReacted,
  reactionSummary,
  onClose,
}) => {
  const { slug, index: chapterIndex } = useParams();
  const reactionsRaw = useSelector((state) => state.app.reactions);
  const [reactions, setReactions] = useState(reactionsRaw);
  useEffect(() => {
    if (!_.isEmpty(reactionSummary)) {
      handleSetReactionSummary(reactionSummary);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChapterReaction = async (id) => {
    try {
      let res = await postChapterReaction({
        slug,
        index: chapterIndex,
        name: id,
      });
      if (res?.success) {
        if (userReacted?.name && userReacted?.name === id) {
          setUserReacted({});
        } else {
          setUserReacted({
            name: id,
          });
        }
        let { summary } = res?.data;
        setReactionSummary(summary);

        handleSetReactionSummary(summary);
      }
    } catch (error) {
    } finally {
      onClose();
    }
  };
  const handleSetReactionSummary = (summary) => {
    let cpReactions = [...reactions];
    cpReactions = cpReactions?.map((item) => {
      return {
        ...item,
        count:
          summary?.find((reaction) => reaction.name === item.id)?.count || 0,
      };
    });
    setReactions([...cpReactions]);
  };
  return (
    <div className="chapter-reaction">
      <ul className="d-flex list-unstyled justify-content-around">
        {reactions?.map((item) => {
          return (
            <li
              className="d-flex flex-column align-items-center pointer"
              onClick={() => handleChapterReaction(item.id)}
              key={item.id}
            >
              <img
                src={item.font}
                alt="not-found"
                style={{
                  width: "32px",
                  height: "32px",
                }}
              ></img>

              <span className="text-capitalize fs-small">{item.count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChapterReaction;
