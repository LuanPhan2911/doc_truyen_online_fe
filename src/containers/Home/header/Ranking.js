import { useState } from "react";
import DropdownBase from "../../../components/DropdownBase";
const Ranking = () => {
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
    <DropdownBase bodyWidth="150px">
      {{
        btn: (
          <button className="btn btn-dropdown">
            <span className="px-2">Bảng xếp hạng</span>
          </button>
        ),
        body: (
          <ul className="list-unstyled row">
            {rankItem?.length > 0 &&
              rankItem.map((item) => {
                return (
                  <li key={item.id} className="text-center">
                    {item.name}
                  </li>
                );
              })}
          </ul>
        ),
      }}
    </DropdownBase>
  );
};
export default Ranking;
