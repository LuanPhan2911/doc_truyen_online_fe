import { useGenresFilter } from "../../../hooks";
import AdminLayout from "../layouts/AdminLayout";
import GenreCreate from "./GenreCreate";
import GenreIndex from "./GenreIndex";
import { useState } from "react";

const GenreHome = () => {
  const [, , genreType] = useGenresFilter();
  const [newGenres, setNewGenres] = useState("");
  return (
    <AdminLayout>
      <div className="mb-3">
        <div className="create-genre">
          <h4>Create Genre</h4>
          <GenreCreate genreType={genreType} setNewGenres={setNewGenres} />
        </div>
        <div className="genre-table">
          <GenreIndex
            genreType={genreType}
            newGenres={newGenres}
            setNewGenres={setNewGenres}
          />
        </div>
      </div>
    </AdminLayout>
  );
};
export default GenreHome;
