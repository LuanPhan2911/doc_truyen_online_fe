import CreateChapterForm from "../containers/admin/chapter/CreateChapterForm";
import CreateStoryForm from "../containers/admin/story/CreateStoryForm";
import StoryHome from "../containers/admin/story/StoryHome";
import Chapter from "../containers/chapter/Chapter";
import HomeLayout from "../containers/Home/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import StoryFilter from "../containers/story/StoryFilter";
import { AuthProvider } from "../hoc";

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
    path: "/admin/story/create",
    element: (
      <AuthProvider>
        <HomeLayout>
          <CreateStoryForm />
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
    path: "/admin/chapter/create",
    element: (
      <HomeLayout>
        <CreateChapterForm />
      </HomeLayout>
    ),
  },
];
export default Story;
