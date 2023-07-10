import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import HomePage from "../containers/Home/HomePage";
import ErrorPage from "./ErrorPage";
import HomeLayout from "../containers/Home/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import Chapter from "../containers/chapter/Chapter";
import CreateStoryForm from "../containers/admin/story/CreateStoryForm";
import CreateChapterForm from "../containers/admin/chapter/CreateChapterForm";
import RedirectIfAuth from "../hoc/RedirectIfAuth";
import StoryFilter from "../containers/story/StoryFilter";

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
    {
      path: "/story/:name",
      element: (
        <HomeLayout>
          <StoryContent />
        </HomeLayout>
      ),
    },
    {
      path: "/story",
      element: (
        <HomeLayout>
          <StoryFilter />
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
