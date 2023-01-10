import image from "../../assets/stories/150.jpg";
const Story = () => {
  return (
    <div className="story-container col-6">
      <div className="row">
        <div className="image col-3">
          <img src={image} alt="Not found" width={"72px"} />
        </div>
        <div className="info col-9">
          <div className="name">Tien gia</div>
          <div className="summarize">
            Cái gọi là tiên giả? Giới Vực phàm nhân biến thành, lấy thiên địa
            chi tinh hoa, thoát thể xác
          </div>
          <div className="row">
            <div className="col-6">Vong ngu</div>
            <div className="col-6 center">
              <span className="border border-primary text-center p-1">
                Tien hiep
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Story;
