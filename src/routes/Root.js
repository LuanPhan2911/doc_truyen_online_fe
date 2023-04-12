import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomeContent from "../containers/Home/body/HomeContent";
import ErrorPage from "./ErrorPage";
import HomePage from "../containers/Home/HomePage";
import StoryContent from "../containers/story/StoryContent";
import ChapterContent from "../containers/chapter/ChapterContent";
import CreateStoryForm from "../containers/admin/story/CreateStoryForm";
import Test from "../components/Test";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage isShowBackground>
          <HomeContent />
        </HomePage>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/test",
      element: <Test />,
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
      element: (
        <HomePage isShowBackground={false}>
          <ChapterContent />
        </HomePage>
      ),
    },

    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "/admin/story/create",
      element: (
        <HomePage>
          <CreateStoryForm />
        </HomePage>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
