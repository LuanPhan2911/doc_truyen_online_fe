import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { postAuthor, getAuthors } from "../../../services/AdminServices";
const StoryAuthor = ({ selectedAuthor, setSelectedAuthor }) => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchAuthors();
  }, []);
  async function fetchAuthors() {
    try {
      let res = await getAuthors();
      if (res?.success) {
        setAuthors((prev) => {
          return res.data.map((item) => {
            return {
              label: item.name,
              value: item.id,
            };
          });
        });
      }
    } catch (error) {}
  }
  const handleCreateAuthor = async (label) => {
    setLoading(true);
    try {
      let res = await postAuthor({
        name: label,
      });
      if (res?.success) {
        setAuthors((prev) => {
          return [
            {
              label: res.data.name,
              value: res.data.id,
            },
            ...prev,
          ];
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <label>Tên tác giả</label>
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        options={authors}
        onChange={(option) => {
          setSelectedAuthor(option);
        }}
        onCreateOption={(label) => handleCreateAuthor(label)}
        value={selectedAuthor}
      />
    </>
  );
};
export default StoryAuthor;
