import Head from "next/head";

import styles from "./category.module.scss";

import Layout from "components/Layout";
import { useAuth } from "@/firebase/context";
import { db } from "@/config/firebase";
import Button from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard/product-card";

const getEmoji = {
  cakes: "🍰",
  brownies: "🍪",
  pastries: "🧁",
  // activewear: "🤸",
  // gifts_and_living: "🎁",
  // inspiration: "💎",
};

export default function Category({ data, query }) {
  const { user, loading } = useAuth();
  if (data.length == 0) {
    data = [
      {
        "id": "1",
        "brand": "Brand A",
        "product_name": "Product A",
        "cover_photo": "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
        "price": "100.00",
        "sale_price": "80.00"
      },
      {
        "id": "2",
        "brand": "Brand B",
        "product_name": "Product B",
        "cover_photo": "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
        "price": "150.00",
        "sale_price": "120.00"
      }
    ]
  }

  console.log(user, loading);

  const formattedName =
    query.category === "gifts_and_living"
      ? "Gifts & Living"
      : query.category[0].toUpperCase() + query.category.slice(1);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>{getEmoji[query.category]}</span>
              {formattedName}
            </h1>
            <div className={styles.headerButtons}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div>
          </div>
          <div className={styles.products}>
            {!loading &&
              data.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    brand={product.brand}
                    name={product.product_name}
                    image={product.cover_photo}
                    price={product.price}
                    sale_price={product.sale_price}
                    favorite={user?.favorites?.includes(product.id)}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </Layout>
  );
}

Category.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};

  await db
    .collection("Products")
    .where("category", "==", query.category.toLowerCase())
    .get()
    .then(function (querySnapshot) {
      const products = querySnapshot.docs.map(function (doc) {
        return { id: doc.id, ...doc.data() };
      });
      data = products;
    })
    .catch((e) => (error = e));

  return {
    data,
    error,
    query,
  };
};
