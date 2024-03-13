import React, { useEffect, useState } from 'react';
import AccountSidebar from '@/components/AccountSidebar';
import Layout from '@/components/Layout';
import styles from './orders.module.scss';
import { useAuth } from '@/firebase/context';
import OrderItem from '@/components/OrderItem';
import { useOrders } from 'hooks/order.hook';
import { useRouter } from 'next/router';
export default function Orders() {
  const { user, loading } = useAuth();
  const { data } = useOrders(true);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);
  // useEffect(() => {
  //     const fetchItems = async () => {
  //       try {
  //         const fetchedItems = await Promise.all(
  //           data.items.map(async (item) => {
  //             const productData = await getItems(item.food_id);
  //             console.log({ ...item, product: productData });
  //             return { ...item, product: productData };
  //           })
  //         );
  //         setItemsData(fetchedItems);
  //         console.log(fetchedItems);
  //       } catch (error) {
  //         console.error('Error processing cart items:', error);
  //       }
    
  //     fetchItems();
  //   }
  // }, [data]);
  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Orders</h1>
        <div className={styles.content}>
          {data.length === 0 ? (
            <span>You have not any order</span>
          ) : (
            <div className={styles.orders}>
              {data.map((item, index) => (
                <OrderItem key={index} data={item} />
              ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
