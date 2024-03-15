import React, { useState, useEffect, useContext, createContext } from "react";
import { firebase, auth, db } from "../config/firebase";
import { getUser } from "pages/api/users";
const authContext = createContext();
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  // console.log("useAuth");
  return useContext(authContext);
};
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = () => {
    auth.currentUser?.uid
      ? getUser(auth.currentUser.uid)
        // db
        //     .collection("Users")
        //     .doc(auth.currentUser.uid)
        //     .get()
        .then((res) => {
          res.data.id = res.data?._id;
          setUser(res.data);
          setLoading(false);
        })
      : setLoading(false);
      
  };

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(() => getCurrentUser());
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    setUser,
  };
}
