import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideBar from "./Sidebar";
import { useEffect, useState } from "react";
import ChapterList from "../../chapter/ChapterList";

const AdminLayout = () => {
  const [isShowChapterList, setShowChapterList] = useState(false);
  const initOffcanvas = {
    title: "Danh sách chương",
    body: <ChapterList isAdmin={true} />,
  };
  const [offcanvas, setOffcanvas] = useState({});
  useEffect(() => {
    if (isShowChapterList) {
      setOffcanvas(initOffcanvas);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowChapterList]);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <div className="col">
          <div className="container">
            <Header
              offcanvasTitle={offcanvas?.title}
              offcanvasBody={offcanvas?.body}
            />
            <Outlet context={[setShowChapterList]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
