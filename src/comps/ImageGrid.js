import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              //console.log(doc.id);
              return setSelectedImg(doc.url);
            }}
          >
            <motion.img
              src={doc.url}
              alt="uploaded picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <div className="img-delete">
              <button
                onClick={() => {
                  console.log(doc.id);
                  projectFirestore.collection("images").doc(doc.id).delete();
                }}
              >
                delete
              </button>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
