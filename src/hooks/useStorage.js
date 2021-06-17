import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "../firebase/config";

const useStorage = (file) => {
  //progress is like...
  // this.state={progress: 0 }
  // setProgress is like..
  // this.setState({progress: this.state.progress + 10 })
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //thunk..?? every time dependency changes(recieve request to upload new file), it will fire the function to upload the file
  useEffect(() => {
    //where should the file be saved
    // what we are doing is to create a reference to a file inside the default firebase storage bucket?
    //file doesnt exit yet, we are just saying using this reference, the file should have the name (file.name) inside the default bucket.
    const storageRef = projectStorage.ref(file.name);
    //uploading the file to the reference "projectStorage.ref(file.name)"
    //below is aynchronous, so we will attach a listner to it, which is going to fire the func when certain event happens(file upload req)
    const collectionRef = projectFirestore.collection("images");

    //event we are listening to is 'state_changed' whenever state/event is changed, we will fire func(the second arg)
    // snap shot is an obj? it is the snap of the upload the moment??
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        //in here we want to figure out the upload progress since snap will be updating several times just to update one pic??
        //percentage of upload progress
        //bytesTransferred is property on snap shot that says how many bytes been transfered in the moment when the snap was fired
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
