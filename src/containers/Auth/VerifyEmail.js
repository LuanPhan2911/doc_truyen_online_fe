import _ from "lodash";
import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useQueryString } from "../../hooks/useQueryString";
import { handleVerifyEmailService } from "../../services/AuthServices";

const VerifyEmail = () => {
  const navigator = useNavigate();
  const params = useParams();
  const queryString = useQueryString();
  const { isLoading, error } = useFetch({
    handleFetchFn: handleVerifyEmailService,
    dataQuery: {
      ...params,
      ...queryString,
    },
  });
  useEffect(() => {
    if (!_.isEmpty(error)) {
      navigator("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    <div>Email was verify</div>
  );
};
export default VerifyEmail;
