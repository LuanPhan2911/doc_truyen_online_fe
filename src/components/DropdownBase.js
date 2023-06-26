import "./DropdownBase.scss";

const DropdownBase = ({ children, minWidth = "400px" }) => {
  return (
    <div className="dropdown">
      {children?.btn}
      <ul
        className="dropdown-menu"
        style={{
          minWidth: minWidth,
        }}
      >
        {children?.body}
      </ul>
    </div>
  );
};
export default DropdownBase;
