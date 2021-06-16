import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  //useState(null)[0] === file
  //file===useState(null)[0]
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    //console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {/* we only show progressbar, if the file is there, */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;