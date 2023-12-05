import StoryHome from "../containers/admin/story/StoryHome";
import Chapter from "../containers/chapter/Chapter";
import HomeLayout from "../containers/layouts/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import StoryFilter from "../containers/story/StoryFilter";
import UpsertStoryForm from "../containers/admin/story/UpsertStoryForm";
import UpsertChapterForm from "../containers/admin/chapter/UpsertChapterForm";

const Story = [
  {
    path: "/admin/story",
    element: (
      <HomeLayout>
        <StoryHome />
      </HomeLayout>
    ),
  },
  {
    path: "/admin/story/:id",
    element: (
      <HomeLayout>
        <UpsertStoryForm isUpdate={true} />
      </HomeLayout>
    ),
  },
  {
    path: "/admin/story/create",
    element: (
      <HomeLayout>
        <UpsertStoryForm />
      </HomeLayout>
    ),
  },
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
    path: "/admin/story/:storyId/chapter/create",
    element: (
      <HomeLayout>
        <UpsertChapterForm />
      </HomeLayout>
    ),
  },
  {
    path: "/admin/story/:storyId/chapter/:index",
    element: (
      <HomeLayout>
        <UpsertChapterForm isUpdate={true} />
      </HomeLayout>
    ),
  },
];
export default Story;
