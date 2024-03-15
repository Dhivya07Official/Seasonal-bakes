import Head from "next/head";
import styles from "./cart.module.scss";
import React, { useEffect, useState } from "react";
import { getItems } from "../api/items"
import Layout from "components/Layout";
import CartItem from "@/components/CartItem";
import { useCart } from "hooks/cart.hook";
import { useAuth } from "@/firebase/context";
import {removeToCart,createOrdersById } from "@/firebase/product";
import { useRouter } from "next/router";

export default function CartPage() {
  const [itemsData, setItemsData] = useState([]);
  const { user, loading } = useAuth();
  const { data } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && typeof window !== "undefined") {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (data?.items?.length) {
      const fetchItems = async () => {
        try {
          const fetchedItems = await Promise.all(data.items.map(async (item) => {
            const productData = await getItems(item.productId);
            return { ...item, product: productData.data };
          }));
          setItemsData(fetchedItems);
        } catch (error) {
          console.error("Error processing cart items:", error);
        }
      };
      fetchItems();
    }
  }, [data]);

  const removeCartItem = async (id) => {
    await removeToCart(id).then(() => {
      console.log("Item removed from cart");
      setTimeout(() => {
        router.reload();
    }, 1000);
    }).catch((error) => {
      console.error("Error removing item from cart:", error);
    })

  };

  // components/Loader.js
// const Loader = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ border: '4px solid #f3f3f3', borderRadius: '50%', borderTop: '4px solid #3498db', width: '40px', height: '40px', animation: 'spin 2s linear infinite' }}></div>
//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

  const orderPage = () => {
    // Loader();
    createOrdersById();
    setTimeout(() => {
      router.push("/account/orders");
    }, 1000); // 5000 milliseconds = 5 seconds
    
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>My Shopping Cart</title>
          <link rel="icon" href="/favicon.jpeg" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Cart</h1>
            <div className="" style={{display:'flex', justifyContent:'space-between', marginRight:'5vw'}}>
              <h4>You have {data?.items?.length || 0} items in your cart</h4>
              {data?.items?.length > 0 && (
                <div className={styles.buttons}>
                <button onClick={() => orderPage()}  style={{width:'10vw',height:'50px',color:"white", backgroundColor:"black"}}>Place Order</button>
              </div>
              )}
            </div>
          </div>
          <div>
            {itemsData.map((item, index) => (
              <div key={index} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', margin: '10px', width: '60vw', display: 'flex',  justifyContent:'space-between', marginRight:'5vw'}}>
                <div className="" style={{marginRight:'40px'}}> 
                  <h2>{item.product.food_name}</h2>
                  <p>Category: {item.product.category}</p>
                  {/* <div>
                    {item.product.photos.map((photo, index) => (
                      <img key={index} src={photo} alt={item.product.food_name} width={item.product.sizes[index]} height={item.product.sizes[index]} />
                    ))}
                  </div> */}
             
                  <p>Price: <s>${item.product.price}</s> ${item.product.sale_price}</p>
                  <p>Availability: {item.product.isAvailable ? 'Available' : 'Unavailable'}</p>
                  <p>Quantity: {item.quantity ? item.quantity : 0}</p>
                  <div className={styles.buttons}>
                    <button onClick={() => removeCartItem(item.productId)}  style={{cursor:'pointer', width:'8vw',height:'40px',color:"white", backgroundColor:"Red",marginTop:"5px"}}>Remove</button>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <img src={item.product.cover_photo} alt="Cover" width={250} height={250} />
                </div>
             </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
