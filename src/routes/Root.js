import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import ErrorPage from "./ErrorPage";
import HomeLayout from "../components/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import ChapterContent from "../containers/chapter/ChapterContent";
import CreateStoryForm from "../containers/admin/story/CreateStoryForm";
import Test from "../components/Test";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomeLayout isShowBackground>
          <HomePage />
        </HomeLayout>
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
        <HomeLayout>
          <StoryContent />
        </HomeLayout>
      ),
    },
    {
      path: "/story/:name/chapter-:number",
      element: (
        <HomeLayout isShowBackground={false}>
          <ChapterContent />
        </HomeLayout>
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
