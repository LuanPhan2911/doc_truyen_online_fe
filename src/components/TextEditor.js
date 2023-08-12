import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],

  ["clean"], // remove formatting button
];
const modules = {
  toolbar: toolbarOptions,
};
function TextEditor({ value, setValue, className }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      className={className}
    />
  );
}
export default TextEditor;
