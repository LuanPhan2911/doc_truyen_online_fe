import { useState } from "react";
import {
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
} from "../../../utils/Helper";
import { toast } from "react-toastify";
import { handleCreateChapterService } from "../../../services/ChapterService";

const CreateChapterForm = () => {
  const [chapter, setChapter] = useState({
    name: "",
    story_id: 2,
    index: "",
    content: "",
  });
  const handleSetInput = (e, name) => {
    let cpChapter = { ...chapter };
    cpChapter[name] = e.target.value;
    setChapter({ ...cpChapter });
  };
  const handleCreateChapter = async () => {
    //validate
    let check = checkPropertiesIsEmpty(chapter);

    if (check) {
      toast.error("Thieu du lieu");
    } else {
      try {
        let res = await handleCreateChapterService(chapter);
        if (res && res?.success) {
          console.log(res.data);
          toast.success("Tao thanh cong");
        }
      } catch (error) {
        handleErrorApiResponse(error);
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="form-group">
            <label>Ten chapter</label>
            <input
              className="form-control"
              type="text"
              value={chapter?.name}
              name="name"
              onChange={(e) => handleSetInput(e, "name")}
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="form-group">
            <label>Chapter thu</label>
            <input
              className="form-control"
              type="number"
              value={chapter?.index}
              onChange={(e) => handleSetInput(e, "index")}
            />
          </div>
        </div>
        <div className="col-12">
          <label>Noi dung</label>
          <textarea
            className="form-control"
            rows={20}
            value={chapter?.content}
            onChange={(e) => handleSetInput(e, "content")}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-success" onClick={() => handleCreateChapter()}>
        Them
      </button>
    </div>
  );
};
export default CreateChapterForm;
