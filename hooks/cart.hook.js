import { db, auth } from "@/config/firebase";
import { useState, useEffect } from "react";
import { findcartLength } from "../pages/api/users";
const useCart = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      if(auth.currentUser) {
        const res = await findcartLength(auth.currentUser?.uid);
        setData(res.data);
      }
        // db
        //   .collection("Users")
        //   .doc(auth.currentUser?.uid)
        //   .onSnapshot(function (doc) {
        //     setData(doc.data().cart);
        //   });
        
    }

    fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

const useCartOnce = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("once");

  useEffect(() => {
    async function fetchFromFirestore() {
      console.log("once inner");

      db.collection("Users")
        .doc(auth.currentUser?.uid)
        .get()
        .then(function (doc) {
          setData(doc.data().cart);
          setLoading(false);
        })
        .catch((e) => setError(e));
    }
    auth.currentUser?.uid && fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

export { useCart, useCartOnce };
