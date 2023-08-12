import { useLocation } from "react-router-dom";
const useQueryString = () => {
  let queryString = useLocation()?.search?.substring(1);

  return Object.fromEntries(new URLSearchParams(queryString));
};
export default useQueryString;
