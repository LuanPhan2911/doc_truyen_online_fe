import Chapter from "../page/Chapter";
import StoryDetail from "../page/StoryDetail";
import StoryFilter from "../page/StoryFilter";

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
