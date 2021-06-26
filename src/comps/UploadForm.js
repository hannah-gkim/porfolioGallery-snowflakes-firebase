import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  //useState(null)[0] === file
  //file===useState(null)[0]
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };

  return (
    <div>
      <div className="title">
        {/* <h1>HannahGram</h1> */}
        <h2>By Hannah</h2>
        <p>If you can dream it, you can do it - Walt Disney</p>
      </div>
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>

        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {/* we only show progressbar, if the file is there, */}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
