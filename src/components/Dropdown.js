import "./Dropdown.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ title, options }) => {
  //   const [options, setOptions] = useState([
  //     {
  //       id: 1,
  //       name: "1",
  //       isActive: false,
  //     },
  //     {
  //       id: 2,
  //       name: "1",
  //       isActive: false,
  //     },
  //     {
  //       id: 3,
  //       name: "1",
  //       isActive: false,
  //     },
  //     {
  //       id: 4,
  //       name: "1",
  //       isActive: false,
  //     },
  //   ]);
  const [isOverButton, setIsOverButton] = useState(true);
  return (
    <div className="dropdown">
      <button
        className="dropdown-btn"
        onMouseEnter={() => setIsOverButton(true)}
        onMouseLeave={() => setIsOverButton(false)}
      >
        <AiOutlineMenu />
        {title}
      </button>
      {isOverButton ? (
        <ul
          className="dropdown-content list-group"
          onMouseEnter={() => setIsOverButton(true)}
          onMouseLeave={() => setIsOverButton(false)}
        >
          {options &&
            options.length > 0 &&
            options.map((item, index) => {
              return (
                <li key={index} className={"list-group-item list-item"}>
                  <Link>Action </Link>
                </li>
              );
            })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Dropdown;
