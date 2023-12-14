import { useState } from "react";
import Comments from "../comments/Comments";

const StoryRating = ({ storyId }) => {
  const menu = [
    {
      id: 1,
      name: "Tính cách nhân vật",
      value: 0,
    },
    {
      id: 2,
      name: "Nội dung cốt truyện",
      value: 0,
    },
    {
      id: 3,
      name: "Bối cảnh thể giới",
      value: 0,
    },
    {
      id: 4,
      name: "Chất lượng bản dịch",
      value: 0,
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
                      class="form-range"
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
          <Comments storyId={storyId} />
        </div>
      </div>
    </div>
  );
};
export default StoryRating;
