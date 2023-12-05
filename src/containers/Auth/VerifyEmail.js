import _ from "lodash";
import { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryString, useFetch } from "../../hooks";
import { handleVerifyEmailService } from "../../services/AuthServices";

const VerifyEmail = () => {
  const params = useParams();
  const queryString = useQueryString();
  console.log(params, queryString);
  useEffect(() => {
    async function fetch() {
      await handleVerifyEmailService({
        ...queryString,
        ...params,
      });
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Verify</div>;
};
export default VerifyEmail;
