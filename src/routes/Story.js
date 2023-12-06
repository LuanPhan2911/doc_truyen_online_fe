import StoryHome from "../containers/admin/story/StoryHome";
import Chapter from "../containers/chapter/Chapter";
import HomeLayout from "../containers/layouts/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import StoryFilter from "../containers/story/StoryFilter";

const Story = [
  {
    path: "/story/:slug",
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
];
export default Story;
