import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomeContent from "../containers/Home/sections/Body/HomeContent";
import ErrorPage from "./ErrorPage";
import Home from "../containers/Story/Home";
import StoryHome from "../containers/Story/Section/StoryHome";
import HomePage from "../containers/Home/HomePage";

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
    {
      path: "/story/:name",
      element: <Home />,
    },
    {
      path: "/story/:name/chapter-:number",
      element: <StoryHome />,
    },
    {
      path: "error-page",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
