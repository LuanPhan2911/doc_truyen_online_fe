import "./DropdownBase.scss";

const DropdownBase = ({ children, bodyWidth = "400px" }) => {
  return (
    <div className="dropdown">
      {children?.btn}
      <ul className="dropdown-menu" style={{ width: bodyWidth }}>
        {children?.body}
      </ul>
    </div>
  );
};
export default DropdownBase;
