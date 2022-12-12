import BackGroundImage from "./Body/BackGroundImage";
const Body = ({ children }) => {
  return (
    <>
      <div className="background-image">
        <BackGroundImage />
      </div>
      {children}
    </>
  );
};
export default Body;
