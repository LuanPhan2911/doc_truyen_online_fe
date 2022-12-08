import StoryReading from "./StoryReading";

const UserRead = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="title">Dang doc</div>
      {stories &&
        stories.length > 0 &&
        stories.map((item, index) => {
          return <StoryReading key={index} />;
        })}
    </>
  );
};
export default UserRead;
