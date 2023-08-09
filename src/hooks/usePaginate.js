import { useEffect, useState } from "react";

const usePaginate = (fetchFn, qs = {}) => {
  const [paginatedData, setPaginatedData] = useState("");
  const [data, setData] = useState("");
  const [links, setLinks] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetchFn(qs);
        if (res?.success) {
          setPaginatedData({ ...res.data });
        }
      } catch (error) {}
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (paginatedData) {
      let { data, links } = paginatedData;
      setData([...data]);
      setLinks([...links]);
    }
  }, [paginatedData]);
  return [data, links];
};
export default usePaginate;
