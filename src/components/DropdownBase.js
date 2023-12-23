import "./DropdownBase.scss";

const DropdownBase = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};
const Button = ({ children }) => {
  return <div className="d-flex">{children}</div>;
};
const Body = ({ children }) => {
  return <ul className="dropdown-menu">{children}</ul>;
};
DropdownBase.Button = Button;
DropdownBase.Body = Body;
export default DropdownBase;
