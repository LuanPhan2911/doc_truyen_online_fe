import { useSelector } from "react-redux";
import "./StoryDescription.scss";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";
const StoryDescription = ({ description, reactionSummary, newestChapter }) => {
  const { slug } = useParams();
  const reactionsRaw = useSelector((state) => state.app.reactions);
  const [reactions, setReactions] = useState(reactionsRaw);
  useEffect(() => {
    if (!_.isEmpty(reactionSummary)) {
      handleSetReactionSummary(reactionSummary);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reactionSummary]);
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
    <>
      <div className="story-description-tag row">
        <div className="story-description-content line-break col-lg-8">
          <div className="story-description border-bottom">{description}</div>
          <div className="story-reaction row my-3 border-bottom">
            <h4 className="col-lg-3 fs-md">Cảm xúc</h4>
            <ul className="col-lg-9 d-flex list-unstyled justify-content-around">
              {reactions?.map((item) => {
                return (
                  <li
                    className="d-flex flex-column align-items-center"
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

                    <span className="text-capitalize fs-small">
                      {item.count}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="story-newest-chapter row my-3 border-bottom align-items-center">
            <h4 className="col-lg-3 fs-md">Chương mới nhất</h4>
            <div className="col-lg-9">
              <Link
                to={`/story/${slug}/chapter/${newestChapter?.index}`}
                className="text-decoration-none"
              >
                {newestChapter?.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="auth-info col-lg-4"></div>
      </div>
    </>
  );
};
export default StoryDescription;
