import React, { useState } from "react";
// import Title from "./Title";
import UploadForm from "./UploadForm";
import HannahImageGrid from "./HannahImageGrid";
import SinglePic from "./HannahSinglePic";

function HannahGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* <Title /> */}
      <UploadForm />
      <HannahImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <SinglePic selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default HannahGallery;
