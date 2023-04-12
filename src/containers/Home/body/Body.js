import BackGroundImage from "./BackGroundImage";
const Body = ({ children, isShowBackground }) => {
  return (
    <div className="main">
      {isShowBackground ? (
        <div className="background-image">
          <BackGroundImage />
        </div>
      ) : (
        <></>
      )}

      <div className="container">{children}</div>
    </div>
  );
};
export default Body;
