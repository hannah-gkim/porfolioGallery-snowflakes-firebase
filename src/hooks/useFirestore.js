import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  /*
  it's like..
  constructor(props){
    suepr(props)
    this.state={
      docs:[];
    }
  */
  const [docs, setDocs] = useState([]);
  //here is where we communicate with database, wheneve we get new collection/image, it reload or adds to database(firestore).

  //useEffect(like dispatching thunk/componentDidMount)
  useEffect(() => {
    /*
    unsub returns func and the func will be used to unsubscribe from the collection
    projectFirestore.collection(collection) =>{firestore:{},...}
    .orderBy("createdAt", "desc")  is firebase method
    */
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //snap take a look at firestore data the moment of snap =>{firestore:{...},...} snap is an obj
        let documents = [];
    
        snap.forEach((doc) => {
          //getting data from firesotre and storing at docs state
          documents.push({ ...doc.data(), id: doc.id });
        });
        //[  {createdAt:..,id:...},{},...  ]
        setDocs(documents);
      });

    //clenan up fuction, once documents is save do the state
    return () => unsub();
  }, [collection]);


  return { docs }; //-> { docs:[{...}, {...}...] }
};

export default useFirestore;
