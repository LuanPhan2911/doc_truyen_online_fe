import GenreHome from "../page/admin/genre/GenreHome";
import Home from "../page/admin/Home";
import StoryHome from "../page/admin/story/StoryHome";
import UpsertStoryForm from "../page/admin/story/UpsertStoryForm";
import ChapterHome from "../page/admin/chapter/ChapterHome";
import UpsertChapter from "../page/admin/chapter/UpsertChapter";

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
    element: <UpsertChapter />,
  },

  {
    path: "/admin/story/:slug/chapter/:index",
    element: <UpsertChapter isUpdate={true} />,
  },
];
export default Admin;
