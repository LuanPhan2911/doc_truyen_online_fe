import { useState } from "react";
import Comments from "../comments/Comments";

const StoryRating = ({ storyId }) => {
  const menu = [
    {
      id: "characteristic",
      name: "Tính cách nhân vật",
      value: 5,
    },
    {
      id: "plot",
      name: "Nội dung cốt truyện",
      value: 5,
    },
    {
      id: "world_building",
      name: "Bối cảnh thể giới",
      value: 5,
    },
    {
      id: "quality_convert",
      name: "Chất lượng bản dịch",
      value: 5,
    },
  ];
  const [ratings, setRatings] = useState([...menu]);
  const handleChangeRange = (e, id) => {
    let ratingsCp = [...ratings];
    ratingsCp = ratingsCp.map((item) => {
      return {
        ...item,
        value: item.id === id ? e.target.value : item.value,
      };
    });
    setRatings(ratingsCp);
  };
  return (
    <div className="story-rating">
      <div className="row">
        <div className="col-lg-8">
          {ratings?.map((item) => {
            return (
              <div className="row" key={item.id}>
                <h4 className="col-lg-3 fs-md">{item.name}</h4>
                <div className="col-lg-9 row">
                  <div className="col-9">
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={5}
                      step={0.5}
                      value={item.value}
                      onChange={(e) => handleChangeRange(e, item.id)}
                    />
                  </div>
                  <div className="col-3">{item.value}</div>
                </div>
              </div>
            );
          })}
          <Comments storyId={storyId} type={1} storyRatings={ratings} />
        </div>
      </div>
    </div>
  );
};
export default StoryRating;
