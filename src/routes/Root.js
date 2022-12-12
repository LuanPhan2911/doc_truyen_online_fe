import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import HomeContent from "../containers/Home/sections/Body/HomeContent";
import ErrorPage from "./ErrorPage";
import Home from "../containers/Story/Home";
import StoryHome from "../containers/Story/Section/StoryHome";

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
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
