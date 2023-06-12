import "./Description.scss";
const Description = ({ description }) => {
  return (
    <>
      <div className="story-description-tag">
        <div className="story-description-content"> {description}</div>
        <div className="auth-info"></div>
      </div>
    </>
  );
};
export default Description;
