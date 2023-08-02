import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import ErrorPage from "./ErrorPage";
import HomeLayout from "../containers/Home/HomeLayout";

import Story from "./Story";
import { Test } from "./Test";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomeLayout>
          <HomePage />
        </HomeLayout>
      ),
      errorElement: <ErrorPage />,
    },
    ...Auth,
    ...Story,
    ...Test,
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
