import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import Box from '@material-ui/core/Box';

const DylanImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("dylan");

  return (
    <Box>
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
          className="img-wrap"
          key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => {
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
          </motion.div>
        ))}
    </div>
        </Box>
  );
};

export default DylanImageGrid;
