import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "../firebase/config";

const useStorage = (file) => {
  
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  
  useEffect(() => {
   
    const storageRef = projectStorage.ref(file.name);
    console.log("cliked +, this is storageRef-->", storageRef);
 
    const collectionRef = projectFirestore.collection("dylan");
    console.log("this is where collection is created?-->", collectionRef);
 
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
     
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      //func that will fire when the upload is complete
      async () => {
        //this does not override url var above since it is a separate scope
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        //once the upload is complete, we are creating new documnet inside firestore.collection
        await collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
