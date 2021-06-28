import React from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import Button from "@material-ui/core/Button";
import { useAuth } from "../hooks/AuthContext";

const DylanSinglePic = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const { docs } = useFirestore("dylan");

  const { currentUser } = useAuth();

  const handleDelete = () => {
    for (let i = 0; i < docs.length; i++) {
      let doc = docs[i];
      let docUrl = doc.url;
      if (docUrl === selectedImg) {
        projectFirestore.collection("dylan").doc(doc.id).delete();
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
      <img src={selectedImg} alt="single pic" />
      {currentUser ? (
        <div className="image-and-button">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
};

export default DylanSinglePic;
