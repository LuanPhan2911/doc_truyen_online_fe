import { useGenresFilter } from "../../../hooks";
import AdminLayout from "../../../containers/admin/layouts/AdminLayout";
import GenreCreate from "../../../containers/admin/genre/GenreCreate";
import GenreIndex from "../../../containers/admin/genre/GenreIndex";
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
