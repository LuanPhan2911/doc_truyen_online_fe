import axios from "../axios";

const handleGetGenreService = (params) => {
  return axios.get("/api/genre", {
    params: params,
  });
};
export { handleGetGenreService };
