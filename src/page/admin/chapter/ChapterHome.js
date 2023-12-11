import ChapterList from "../../../containers/chapter/ChapterList";
import AdminLayout from "../../../containers/admin/layouts/AdminLayout";

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
