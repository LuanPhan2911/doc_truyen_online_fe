import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import ErrorPage from "./ErrorPage";

import Story from "./Story";
import Report from "./Report";
import Admin from "./Admin";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    ...Auth,
    ...Story,
    ...Report,
    ...Admin,
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
