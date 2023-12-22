import Chapter from "../page/chapter/Chapter";
import StoryDetail from "../page/story/StoryDetail";
import StoryFilter from "../page/story/StoryFilter";

const Story = [
  {
    path: "/story/:slug",
    element: <StoryDetail />,
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
