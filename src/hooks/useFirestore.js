import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//collection is where image come from, in this case it is 'images' folder? in firestore
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  //here is where we communicate with database, wheneve we get new collection/image, it reload or adds to database?
  //it fires whenever dependencies changes which is the second arg, collection.

  useEffect(() => {
    //unsub returns func and the func will be used to unsubscribe from the collection
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //snap take a look at firestore data the moment of snap
        let documents = [];
        snap.forEach((doc) => {
          //getting data from firestore database??
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    //clenan up fuction
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
