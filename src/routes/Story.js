import Chapter from "../containers/chapter/Chapter";
import HomeLayout from "../containers/layouts/HomeLayout";
import StoryContent from "../containers/story/StoryContent";
import StoryFilter from "../containers/story/StoryFilter";

const Story = [
  {
    path: "/story/:slug",
    element: <StoryContent />,
  },
  {
    path: "/story",
    element: <StoryFilter />,
  },
  {
    path: "/story/:slug/chapter/:index",
    element: <Chapter />,
  },
];
export default Story;
