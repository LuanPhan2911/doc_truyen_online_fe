import GenreHome from "../page/admin/genre/GenreHome";
import Home from "../page/admin/Home";
import StoryHome from "../page/admin/story/StoryHome";
import UpsertStoryForm from "../page/admin/story/UpsertStoryForm";
import UpsertChapter from "../page/admin/chapter/UpsertChapter";
import ChapterHome from "../page/admin/chapter/ChapterHome";

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
    path: "/admin/story/:id",
    element: <UpsertStoryForm isUpdate={true} />,
  },
  {
    path: "/admin/story/:id/chapter",
    element: <ChapterHome />,
  },
  {
    path: "/admin/story/:id/chapter/create",
    element: <UpsertChapter />,
  },

  {
    path: "/admin/story/:id/chapter/:index",
    element: <UpsertChapter isUpdate={true} />,
  },
];
export default Admin;
