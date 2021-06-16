import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
//import { motion } from "framer-motion";

//once upload is done, setFile back to null
// we know it is uploaded when the url value is available
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);
//useEffect is like componentDidMount or componentDidUpdate. it tells component that it needs to do something after render.
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}></div>
    // <motion.div
    //   className="progress-bar"
    //   initial={{ width: 0 }}
    //   animate={{ width: progress + "%" }}
    // ></motion.div>
  );
};

export default ProgressBar;
