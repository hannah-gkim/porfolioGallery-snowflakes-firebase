import React from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

const SinglePic = ({ selectedImg, setSelectedImg }) => {
  
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const { docs } = useFirestore("hannah");

  const handleDelete = () => {
    for (let i = 0; i < docs.length; i++) {
      let doc = docs[i];
      let docUrl = doc.url;
      if (docUrl === selectedImg) {
        projectFirestore.collection("hannah").doc(doc.id).delete();
      }
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={selectedImg} alt="single pic" />
      <button onClick={handleDelete}>delete</button>
    </motion.div>
  );
};

export default SinglePic;
