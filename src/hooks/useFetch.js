import { useCallback, useEffect, useState } from "react";

const useFetch = (handleFetchFn, dataQuery = {}) => {
  const handleFetchData = useCallback(async () => {
    try {
      setLoading(true);
      let res = await handleFetchFn(dataQuery);
      if (res?.success) {
        setData(res.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [handleFetchFn, dataQuery]);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, isLoading, error };
};
export { useFetch };
