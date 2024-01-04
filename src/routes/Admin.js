import GenreHome from "../page/admin/genre/GenreHome";
import StoryHome from "../page/admin/story/StoryHome";
import UpsertStoryForm from "../page/admin/story/UpsertStoryForm";
import UpsertChapter from "../page/admin/chapter/UpsertChapter";
import ChapterHome from "../page/admin/chapter/ChapterHome";

const Admin = [
  {
    path: "genre",
    element: <GenreHome />,
  },

  {
    path: "story",
    element: <StoryHome />,
  },
  {
    path: "story/create",
    element: <UpsertStoryForm />,
  },
  {
    path: "story/:slug",
    element: <UpsertStoryForm isUpdate={true} />,
  },
  {
    path: "story/:slug/chapter",
    element: <ChapterHome />,
  },
  {
    path: "story/:slug/chapter/create",
    element: <UpsertChapter />,
  },

  {
    path: "story/:slug/chapter/:index",
    element: <UpsertChapter isUpdate={true} />,
  },
];
export default Admin;
