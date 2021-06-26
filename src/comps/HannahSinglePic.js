import React from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import Button from '@material-ui/core/Button'

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
        setSelectedImg(null);
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
      <Button onClick={handleDelete}>delete</Button>
      <img src={selectedImg} alt="single pic" />
    </motion.div>
  );
};

export default SinglePic;
