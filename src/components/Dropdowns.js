import { DropdownButton, Dropdown } from "react-bootstrap";
const Dropdowns = ({ title, options }) => {
  return (
    <DropdownButton title={title}>
      {options?.length > 0 &&
        options.map((item, index) => {
          return (
            <Dropdown.Item href="#" key={index}>
              {item.name}
            </Dropdown.Item>
          );
        })}
    </DropdownButton>
  );
};
export default Dropdowns;
