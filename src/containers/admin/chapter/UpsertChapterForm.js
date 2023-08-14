import { useEffect, useState } from "react";
import {
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
import { handleCreateChapterService } from "../../../services/AdminServices";
import { useParams } from "react-router-dom";
import {
  handleShowChapterService,
  handleUpdateChapterService,
} from "../../../services/AdminServices";
const UpsertChapterForm = ({ isUpdate }) => {
  const { storyId, index: chapterIndex } = useParams();

  const [chapter, setChapter] = useState({
    id: "",
    name: "",
    index: "",
    content: "",
    story_id: storyId,
  });
  useEffect(() => {
    if (isUpdate) {
      async function fetchChapter() {
        try {
          let res = await handleShowChapterService(storyId, chapterIndex);
          if (res?.success) {
            let data = res.data;
            let computedData = computedChapter(data);
            setChapter({ ...computedData });
          }
        } catch (error) {}
      }
      fetchChapter();
    }
  }, []);

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
    let check = checkPropertiesIsEmpty(chapter, ["index", "id"]);

    if (check) {
      toast.error("Thiếu dữ liệu");
    } else {
      if (isUpdate) {
        let cpChapter = { ...chapter };
        let res = await handleUpdateChapterService(cpChapter, cpChapter.id);
        if (res?.success) {
          toast.success("Cập nhật thành công!");
          let data = res.data;
          let computedData = computedChapter(data);
          setChapter({ ...computedData });
        }
      } else {
        try {
          let cpChapter = { ...chapter };
          cpChapter["story_id"] = storyId;
          let res = await handleCreateChapterService(cpChapter, storyId);
          if (res && res?.success) {
            toast.success("Thêm thành công");
            setChapter({
              name: "",
              index: "",
              content: "",
              id: "",
              story_id: storyId,
            });
          }
        } catch (error) {
          handleErrorApiResponse(error);
        }
      }
    }
  };

  return (
    <>
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
    </>
  );
};
export default UpsertChapterForm;
