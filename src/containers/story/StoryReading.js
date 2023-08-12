import avatar from "../../assets/stories/default.jpg";
const StoryReading = () => {
  return (
    <div className="row">
      <div className="col-2">
        <img src={avatar} alt="?" width={"32px"} />
      </div>
      <div className="col-10">
        <div className="name">Thong thien ta de</div>
        <div className="chapter-reading">Da doc: 15/150</div>
      </div>
    </div>
  );
};
export default StoryReading;
