import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { useAuth } from "../hooks/AuthContext";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UploadForm = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function  handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

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
      {currentUser ? (
        <div>
          <Button
            style={{
              margin: "0",
              position: "absolute",
              top: "14%",
              right: "2%",
              backgroundColor: "#a6d4fa"
            }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
          <form className="uploadForm">
            <label>
              <input
                className="uploadInput"
                type="file"
                onChange={handleChange}
              />
              <span>+</span>
            </label>
            <div className="output">
              {error && <div className="error">{error}</div>}
              {file && <div>{file.name}</div>}
              {/* we only show progressbar, if the file is there, */}
              {file && (
                <ProgressBar
                  file={file}
                  setFile={setFile}
                  collection={props.collection}
                />
              )}
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UploadForm;
