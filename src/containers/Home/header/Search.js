import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.scss";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {};
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <div className="form-group search-input">
      <input
        type={"text"}
        className="form-control search-input"
        placeholder="Tìm kiếm"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <button
        className="btn bg-transparent btn-search"
        onClick={() => handleSearch()}
      >
        <BsSearch size={"1.2em"} />
      </button>
    </div>
  );
};
export default Search;
