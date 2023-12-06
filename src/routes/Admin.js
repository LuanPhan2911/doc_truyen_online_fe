import ChapterHome from "../containers/admin/chapter/ChapterHome";
import UpsertChapterForm from "../containers/admin/chapter/UpsertChapterForm";
import GenreHome from "../containers/admin/genre/GenreHome";
import Home from "../containers/admin/home/Home";
import StoryHome from "../containers/admin/story/StoryHome";
import UpsertStoryForm from "../containers/admin/story/UpsertStoryForm";
import ChapterList from "../containers/chapter/ChapterList";

const Admin = [
  {
    path: "/admin",
    element: <Home />,
  },
  {
    path: "/admin/genre",
    element: <GenreHome />,
  },

  {
    path: "/admin/story",
    element: <StoryHome />,
  },
  {
    path: "/admin/story/create",
    element: <UpsertStoryForm />,
  },
  {
    path: "/admin/story/:slug",
    element: <UpsertStoryForm isUpdate={true} />,
  },
  {
    path: "/admin/story/:slug/chapter",
    element: <ChapterHome />,
  },
  {
    path: "/admin/story/:slug/chapter/create",
    element: <UpsertChapterForm />,
  },

  {
    path: "/admin/story/:slug/chapter/:index",
    element: <UpsertChapterForm isUpdate={true} />,
  },
];
export default Admin;
