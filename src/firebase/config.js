import firebase from "firebase/app";
//where we store images
import "firebase/storage";
//database
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: "AIzaSyAEH2T8OM5Qrj5lWcsbgkdOLTQtxNq7oR0",
  // authDomain: "instagram-clone-61bfe.firebaseapp.com",
  // projectId: "instagram-clone-61bfe",
  // storageBucket: "instagram-clone-61bfe.appspot.com",
  // messagingSenderId: "660191214570",
  // appId: "1:660191214570:web:9e1f880de5a51ab3101093",

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

//initializing storage service to store images..
const projectStorage = firebase.storage();
//to interact with firestore database
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = app.auth();

export {
  projectStorage,
  projectFirestore,
  timeStamp,
  auth,
  firebase,
  app as default,
};
