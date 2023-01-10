import BackGroundImage from "./BackGroundImage";
const Body = ({ children, isShowBackground }) => {
  return (
    <main className="main">
      {isShowBackground ? (
        <div className="background-image">
          <BackGroundImage />
        </div>
      ) : (
        <></>
      )}

      <div className="container">
        <div className="card p-3 main">{children}</div>
      </div>
    </main>
  );
};
export default Body;
