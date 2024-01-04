import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks";

import "./App.scss";
import HomePage from "../page/HomePage";
import Logout from "./auth/Logout";
import Author from "../page/author/Author";

import Report from "../routes/Report";
import Admin from "../routes/Admin";
import User from "../routes/User";
import ErrorPage from "../page/ErrorPage";
import HomeLayout from "./layouts/HomeLayout";
import Story from "../routes/Story";
import AdminLayout from "./admin/layouts/AdminLayout";

function App() {
  useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
        { path: "author/:slug", element: <Author /> },
        ...Story,
        ...User,
        {
          path: "error-page",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [...Admin],
    },
    ...Report,
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
