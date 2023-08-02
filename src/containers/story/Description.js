import "./Description.scss";
const Description = ({ description }) => {
  return (
    <>
      <div className="story-description-tag">
        <div className="story-description-content">
          <span dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
        <div className="auth-info"></div>
      </div>
    </>
  );
};
export default Description;
