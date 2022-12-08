import BackGroundImage from "./Body/BackGroundImage";
const Body = ({ children }) => {
  return (
    <>
      <div className="background-image">
        <BackGroundImage />
      </div>
      <div className="body-container">{children}</div>
    </>
  );
};
export default Body;
