import { useEffect, useState } from "react";
import Dropdowns from "../../../components/Dropdowns";
import { useFetch } from "../../../hooks/useFetch";
import { handleGetGenreService } from "../../../services/GernService";

const Genre = () => {
  const { data: genres } = useFetch({
    handleFetchFn: handleGetGenreService,
    dataQuery: {
      type: 1,
    },
  });
  useEffect(() => {
    if (genres?.length > 0) {
      buildDataRender(genres);
    }
  }, [genres]);
  const buildDataRender = (options) => {
    let obj = {};
    obj["name"] = "Tất cả";
    obj["type"] = 0;
    obj["id"] = -1;
    if (options?.length > 0) {
      options.unshift(obj);
    }
  };

  return <Dropdowns title={"The loai"} options={genres} />;
};
export default Genre;
