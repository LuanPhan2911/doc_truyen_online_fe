import { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
const Dropdowns = ({ title, options }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (options?.length > 0) {
      buildDataRender(options);
    }
  }, [options]);
  const buildDataRender = (options) => {
    let obj = {};
    obj["name"] = "Tất cả";
    obj["type"] = 0;
    obj["id"] = -1;
    if (options?.length > 0) {
      options.unshift(obj);
      setData(options);
    }
  };
  return (
    <DropdownButton title={title}>
      {data?.length > 0 &&
        data.map((item) => {
          return (
            <Dropdown.Item href="#" key={item.id}>
              {item.name}
            </Dropdown.Item>
          );
        })}
    </DropdownButton>
  );
};
export default Dropdowns;
