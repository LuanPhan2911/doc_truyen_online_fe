import StoryHome from "../containers/admin/story/StoryHome";
import Chapter from "../containers/chapter/Chapter";
import HomeLayout from "../containers/Home/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import StoryFilter from "../containers/story/StoryFilter";
import { AuthProvider } from "../hoc";
import UpsertStoryForm from "../containers/admin/story/UpsertStoryForm";
import UpsertChapterForm from "../containers/admin/chapter/UpsertChapterForm";

const Story = [
  {
    path: "/admin/story",
    element: (
      <AuthProvider>
        <HomeLayout>
          <StoryHome />
        </HomeLayout>
      </AuthProvider>
    ),
  },
  {
    path: "/admin/story/:id",
    element: (
      <AuthProvider>
        <HomeLayout>
          <UpsertStoryForm isUpdate={true} />
        </HomeLayout>
      </AuthProvider>
    ),
  },
  {
    path: "/admin/story/create",
    element: (
      <AuthProvider>
        <HomeLayout>
          <UpsertStoryForm />
        </HomeLayout>
      </AuthProvider>
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
