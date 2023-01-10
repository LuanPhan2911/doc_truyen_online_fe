import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="row">
      <div className="col-6 form-group ">
        <input type={"text"} className="form-control" />
      </div>
      <BsSearch className="col-3" />
    </div>
  );
};
export default Search;
