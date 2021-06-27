import React, { useState } from "react";
import TitleDylan from "./TitleDylan";
import UploadForm from "./UploadForm";
import DylanImageGrid from "./DylanImageGrid";
import SinglePic from "./DylanSinglePic";

function DylanGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <TitleDylan />
      <UploadForm />
      <DylanImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <SinglePic selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default DylanGallery;
