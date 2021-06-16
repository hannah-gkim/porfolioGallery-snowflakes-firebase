import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { projectStorage } from "./firebase/config";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
}

export default App;
