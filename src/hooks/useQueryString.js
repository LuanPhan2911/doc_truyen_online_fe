import { useLocation } from "react-router-dom";
export const useQueryString = () => {
  let queryString = useLocation()?.search?.substring(1);

  return Object.fromEntries(new URLSearchParams(queryString));
};
