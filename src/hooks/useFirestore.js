import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//collection is where image come from, in this case it is 'images' folder? in firestore
const useFirestore = (collection) => {
  /*
  it's like..
  constructor(props){
    suepr(props)
    this.state={
      docks:[];
    }
  }
  this.state={(docs:[...this.state.docs,??])}
  */
  //docs=[{...},{...}]
  const [docs, setDocs] = useState([]);
  //here is where we communicate with database, wheneve we get new collection/image, it reload or adds to database(firestore).

  //useEffect(like dispatching thunk/componentDidMount) fires whenever dependencies changes which is the second arg, collection in useEffect.
  useEffect(() => {
    /*
    unsub returns func and the func will be used to unsubscribe from the collection
    projectFirestore.collection(collection) =>{firestore:{},...}
    .orderBy("createdAt", "desc")  is firebase method
    */
    // console.log("store-->", projectFirestore.collection(collection));
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //snap take a look at firestore data the moment of snap =>{firestore:{...},...} snap is an obj
        let documents = [];
        //why forEach for an obj??
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
// so long story... useFirestore
//returns like reducer? { docs:[{...}, {...}...] }

// const deleteStorage = (collection, id) => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {

//     const unsub = projectFirestore
//       .collection(collection)
//       .orderBy("createdAt", "desc")
//       .doc(id)
//       .delete()
//       .onSnapshot((snap) => {
//         //snap take a look at firestore data the moment of snap =>{firestore:{...},...} snap is an obj
//         let documents = [];
//         //why forEach for an obj??
//         snap.forEach((doc) => {
//           //getting data from firesotre and storing at docs state
//           documents.push({ ...doc.data(), id: doc.id });
//         });
//         //[  {createdAt:..,id:...},{},...  ]
//         setDocs(documents);
//       });

//     //clenan up fuction, once documents is save do the state
//     return () => unsub();
//   }, [collection]);
//   return { docs }; //-> { docs:[{...}, {...}...] }
// };

export default useFirestore;
