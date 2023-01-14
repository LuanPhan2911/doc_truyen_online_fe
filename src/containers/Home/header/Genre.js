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

  return <Dropdowns title={"The loai"} options={genres} />;
};
export default Genre;
