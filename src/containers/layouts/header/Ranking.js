import { useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
const Ranking = ({ btn }) => {
  const [rankItem, setRankItem] = useState([
    {
      id: "1",
      name: "Thịnh hành",
    },
    {
      id: "2",
      name: "Đọc nhiều",
    },
    {
      id: "3",
      name: "Đề cử",
    },
    {
      id: "4",
      name: "Yêu thích",
    },
    {
      id: "5",
      name: "Thảo luận",
    },
  ]);
  return (
    <DropdownBase minWidth="200px">
      <DropdownBase.Button>
        <i className="bi bi-bar-chart"></i>
        <button className="btn-dropdown dropdown-toggle">Xếp hạng</button>
      </DropdownBase.Button>
      <DropdownBase.Body>
        <ul>
          {rankItem?.length > 0 &&
            rankItem.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
      </DropdownBase.Body>
    </DropdownBase>
  );
};
export default Ranking;
