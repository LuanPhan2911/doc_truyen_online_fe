import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

import { handleLogoutService } from "../../services/AuthServices";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
const Logout = () => {
  const navigator = useNavigate();
  const { data, isLoading, error } = useFetch({
    handleFetchFn: handleLogoutService,
  });
  useEffect(() => {
    if (!_.isEmpty(error)) {
      navigator("/");
    }
  }, [data, isLoading, error]);
  return isLoading ? (
    <Triangle
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  ) : error ? (
    <div>Some error</div>
  ) : (
    <div>User logout</div>
  );
};
export default Logout;
