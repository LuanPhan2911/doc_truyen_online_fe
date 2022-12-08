import Story from "./Story";
const Stories = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="title">Bien tap vien de cu</div>
      <div className="row">
        {stories &&
          stories.length > 0 &&
          stories.map((item, index) => {
            return <Story key={index} />;
          })}
      </div>
    </>
  );
};
export default Stories;
