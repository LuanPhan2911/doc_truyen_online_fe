import ChapterList from "../../chapter/ChapterList";
import AdminLayout from "../layouts/AdminLayout";

const ChapterHome = () => {
  return (
    <AdminLayout
      offcanvasTitle={"Danh sách chương"}
      offcanvasBody={<ChapterList isAdmin={true} />}
    >
      <ChapterList isAdmin={true} />
    </AdminLayout>
  );
};
export default ChapterHome;
