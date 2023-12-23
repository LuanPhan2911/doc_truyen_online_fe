import { useEffect, useState } from "react";
import {
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
import { postChapter } from "../../../services/AdminServices";
import { useParams } from "react-router-dom";
import { getChapter, putChapter } from "../../../services/AdminServices";
import AdminLayout from "../../../containers/admin/layouts/AdminLayout";
import ChapterList from "../../../containers/chapter/ChapterList";
const UpsertChapter = ({ isUpdate }) => {
  const { slug, index } = useParams();
  const initChapter = {
    id: "",
    name: "",
    index: "",
    content: "",
    story_id: "",
  };
  const [chapter, setChapter] = useState({
    ...initChapter,
  });
  useEffect(() => {
    if (isUpdate) {
      async function fetchChapter() {
        try {
          let res = await getChapter(slug, index);
          if (res?.success) {
            let data = res.data;
            let computedData = computedChapter(data);
            setChapter({ ...computedData });
          }
        } catch (error) {}
      }
      fetchChapter();
    } else {
      setChapter({ ...initChapter });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const computedChapter = (data) => {
    let { content, name, story_id, index, id } = data;
    return { content, name, story_id, index, id };
  };
  const handleSetInput = (e, name) => {
    let cpChapter = { ...chapter };
    cpChapter[name] = e.target.value;
    setChapter({ ...cpChapter });
  };
  const handleUpsertChapter = async () => {
    //validate
    let check = checkPropertiesIsEmpty(chapter, ["index", "id", "story_id"]);

    if (check) {
      toast.error("Thiếu dữ liệu");
    } else {
      if (isUpdate) {
        let cpChapter = { ...chapter };
        let res = await putChapter(slug, index, cpChapter);
        if (res?.success) {
          toast.success("Cập nhật thành công!");
          let data = res.data;
          let computedData = computedChapter(data);
          setChapter({ ...computedData });
        }
      } else {
        try {
          let cpChapter = { ...chapter };
          let res = await postChapter(slug, cpChapter);
          if (res && res?.success) {
            toast.success("Thêm thành công");
            setChapter({
              ...initChapter,
            });
          }
        } catch (error) {
          handleErrorApiResponse(error);
        }
      }
    }
  };

  return (
    <AdminLayout
      offcanvasTitle={"Danh sách chương"}
      offcanvasBody={<ChapterList isAdmin={true} />}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Tên chương</label>
              <input
                className="form-control"
                type="text"
                value={chapter?.name}
                name="name"
                onChange={(e) => handleSetInput(e, "name")}
              />
            </div>
          </div>
          <div className="col-12">
            <label>Nội dung</label>
            <textarea
              className="form-control"
              rows={20}
              value={chapter?.content}
              onChange={(e) => handleSetInput(e, "content")}
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={() => handleUpsertChapter()}
        >
          {isUpdate ? "Cập nhật" : "Thêm"}
        </button>
      </div>
    </AdminLayout>
  );
};
export default UpsertChapter;
