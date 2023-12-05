import GenreHome from "../containers/admin/genre/GenreHome";
import Home from "../containers/admin/layouts/AdminLayout";

const Admin = [
  {
    path: "/admin",
    element: <Home />,
  },
  {
    path: "/admin/genre",
    element: <GenreHome />,
  },
];
export default Admin;
