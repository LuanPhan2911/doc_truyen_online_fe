import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    console.log(searchValue);
  };
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <div className="form-group">
      <input
        type={"text"}
        className="form-control search-input"
        placeholder="Tìm kiếm"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <button
        className="btn bg-transparent input-group-append d-inline"
        onClick={() => handleSearch()}
      >
        {" "}
        <BsSearch />
      </button>
    </div>
  );
};
export default Search;
