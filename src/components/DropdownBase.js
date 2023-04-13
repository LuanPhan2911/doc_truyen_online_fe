const DropdownBase = ({ children }) => {
  return (
    <div className="dropdown">
      {children?.btn}
      <ul className="dropdown-menu">{children?.body}</ul>
    </div>
  );
};
export default DropdownBase;
