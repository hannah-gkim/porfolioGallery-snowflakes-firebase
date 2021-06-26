import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";

const AuthContext = React.createContext(); //return {} 

//React's useContext just uses the Context object -- which you have created before --
//to retrieve the most recent value from AuthContext.
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
   // by default we are loading and once useEffect runs, it  will verify to see if user exist? if user exist we set loading to false....

  // if you don't want to use firebase, you only need to change these below to connect to database of your choice
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  console.log("children before return-->", children);
  console.log("loading before return-->", loading);
  return (
    <AuthContext.Provider value={value}>
        {console.log("children after return-->", children)}
        {console.log("loading after return-->", loading)}
      {!loading && children}
    </AuthContext.Provider>
  );
}
