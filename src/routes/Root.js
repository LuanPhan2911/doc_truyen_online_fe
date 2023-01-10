import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomeContent from "../containers/Home/body/HomeContent";
import ErrorPage from "./ErrorPage";
import HomePage from "../containers/Home/HomePage";
import StoryContent from "../containers/story/StoryContent";
import ChapterContent from "../containers/chapter/ChapterContent";

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
      element: (
        <HomePage>
          <StoryContent />
        </HomePage>
      ),
    },
    {
      path: "/story/:name/chapter-:number",
      element: <ChapterContent />,
    },
    {
      path: "error-page",
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
