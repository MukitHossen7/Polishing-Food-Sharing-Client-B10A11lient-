/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refetch, setRefetch] = useState();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createSignUpNewUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInExistingUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const users = { email: currentUser?.email };
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/jwt`, users, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_BASE_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      connection();
      // setUser(null);
    };
  }, [refetch]);
  const authInfo = {
    user,
    setRefetch,
    loading,
    setLoading,
    email,
    setEmail,
    createSignUpNewUsers,
    signInExistingUsers,
    logOut,
    signInWithGoogle,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
