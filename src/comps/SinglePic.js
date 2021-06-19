import React from "react";

const SinglePic = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="single pic" />
    </div>
  );
};

export default SinglePic;
