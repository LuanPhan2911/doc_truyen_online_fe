import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import ErrorPage from "./ErrorPage";
import HomeLayout from "../components/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import Chapter from "../containers/chapter/Chapter";
import CreateStoryForm from "../containers/admin/story/CreateStoryForm";
import CreateChapterForm from "../containers/admin/chapter/CreateChapterForm";

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
      path: "/story/:name/chapter/:index",
      element: <Chapter />,
    },

    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "/admin/story/create",
      element: (
        <HomeLayout>
          <CreateStoryForm />
        </HomeLayout>
      ),
    },
    {
      path: "/admin/chapter/create",
      element: (
        <HomeLayout>
          <CreateChapterForm />
        </HomeLayout>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;
