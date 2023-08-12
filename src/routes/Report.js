import HomeLayout from "../containers/Home/HomeLayout";
import Reports from "../containers/admin/reports/Reports";
const Report = [
  {
    path: "/admin/reports",
    element: (
      <HomeLayout>
        <Reports />
      </HomeLayout>
    ),
  },
];
export default Report;
