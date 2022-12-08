import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import HomeContent from "../containers/Home/sections/Body/HomeContent";
import ErrorPage from "./ErrorPage";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage>
          <HomeContent />
        </HomePage>
      ),
      errorElement: <ErrorPage />,
    },
    ...Auth,
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
