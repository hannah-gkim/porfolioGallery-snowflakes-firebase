import React from "react";
import useStorage from "../hooks/useStorage";

//file and setFile is from UploadForm.js
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  return <div className="progress-bar">progress</div>;
};

export default ProgressBar;
