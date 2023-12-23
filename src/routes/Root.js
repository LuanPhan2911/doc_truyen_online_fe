import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Story from "./Story";
import Report from "./Report";
import Admin from "./Admin";
import User from "./User";
import HomePage from "../page/HomePage";
import Logout from "../containers/auth/Logout";
import Author from "../page/author/Author";
const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/author/:slug",
      element: <Author />,
    },
    ...Story,
    ...Report,
    ...Admin,
    ...User,
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
