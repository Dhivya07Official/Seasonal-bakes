import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import {getAllOrdersByUserId} from "../pages/api/orders";
import { getItems } from "../pages/api/items";
const useOrders = (isDetail) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      auth.currentUser &&
        // db
        //   .collection("Users")
        //   .doc(auth.currentUser.uid)
        //   .get()
        //   .then(function (doc) {
        //     const orders = doc.data().orders;
        //     console.log(orders);
        //     if (orders) {
        //       db.collection("Orders")
        //         .get()
        //         .then(function (querySnapshot) {
        //           const ordersArray = querySnapshot.docs
        //             .filter((doc) => orders.includes(doc.id))
        //             .map(function (doc) {
        //               return {
        //                 id: doc.id,
        //                 ...doc.data(),
        //                 date: doc.data().date.toDate(),
        //               };
        //             });
        //           setData(ordersArray);
        //           setLoading(false);
        //         });
        //     }
        //   });
        getAllOrdersByUserId(auth.currentUser.uid).then(async function (orders) {

                  if(isDetail){  
                    const fetchedItems = await Promise.all(
                      orders?.data?.map(async (item) => {
                        const productData = await getItems(item.food_id);
                        return { ...item, product: productData.data };
                      }));
                      setData(fetchedItems);
          }else{
            setData(orders.data);
          }
          setLoading(false);
        }).catch((e) => setError(e));
    }

    fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

export { useOrders };
