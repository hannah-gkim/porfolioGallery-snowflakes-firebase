// import { useState, useEffect } from "react";
// import { projectFirestore } from "../firebase/config";



// const useFirestoreDelete = (collection) => {
//   /*
//   it's like..
//   constructor(props){
//     suepr(props)
//     this.state={
//       docks:[];
//     }
//   }
//   this.state={(docs:[...this.state.docs,??])}
//   */
//   //docs=[{...},{...}]
//   const [docs, setDocs] = useState([]);
 
//   useEffect(() => {
 
//     const unsub = projectFirestore
//       .collection(collection)
//       .orderBy("createdAt", "desc")
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


// export default useFirestoreDelete;
