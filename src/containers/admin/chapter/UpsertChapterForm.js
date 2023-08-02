import { useEffect, useState } from "react";
import {
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
import { handleCreateChapterService } from "../../../services/ChapterService";
import { useParams } from "react-router-dom";

const UpsertChapterForm = ({ isUpdate }) => {
  const params = useParams();
  const [chapter, setChapter] = useState({
    name: "",
    story_id: "",
    index: "",
    content: "",
  });
  useEffect(() => {
    let { storyId, index: chapterIndex } = params;
    setChapter({ ...chapter, story_id: storyId });
  }, []);

  const handleSetInput = (e, name) => {
    let cpChapter = { ...chapter };
    cpChapter[name] = e.target.value;
    setChapter({ ...cpChapter });
  };
  const handleUpsertChapter = async () => {
    //validate
    let check = checkPropertiesIsEmpty(chapter, ["index"]);

    if (check) {
      toast.error("Thiếu dữ liệu");
    } else {
      if (isUpdate) {
      } else {
        try {
          let res = await handleCreateChapterService(chapter);
          if (res && res?.success) {
            toast.success("Thêm thành công");
          }
        } catch (error) {
          handleErrorApiResponse(error);
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
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
        {isUpdate && (
          <div className="col-lg-6 col-sm-12">
            <div className="form-group">
              <label>Chương thứ</label>
              <input
                className="form-control"
                type="number"
                value={chapter?.index}
                onChange={(e) => handleSetInput(e, "index")}
              />
            </div>
          </div>
        )}

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
      <button className="btn btn-success" onClick={() => handleUpsertChapter()}>
        {isUpdate ? "Cập nhật" : "Thêm"}
      </button>
    </div>
  );
};
export default UpsertChapterForm;
