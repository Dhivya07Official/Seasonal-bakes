import Head from "next/head";
import Layout from "components/Layout";
import { useAuth } from "@/firebase/context";
import Button from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard/product-card";
import styles from "./category.module.scss";
import { getAllItems } from "../api/items"

const emojiMap = {
  cakes: "🍰",
  cookies: "🍪",
  brownies: "🧁",
  pastries: "🥖",
};

export default function Category({ productsData, query }) {
  const { user, loading } = useAuth();

  let displayedProducts = productsData.length === 0 ? defaultProducts : productsData;

  console.log({ user, loading });

  const categoryName =
    query.category === "gifts_and_living"
      ? "Gifts & Living"
      : `${query.category[0].toUpperCase()}${query.category.slice(1)}`;

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Seasonal bakes</title>
          <link rel="icon" href="/favicon.jpeg" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>{emojiMap[query.category]}</span>
              {categoryName}
            </h1>
            {/* <div className={styles.headerButtons}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div> */}
          </div>
          <div className={styles.products}>
            {!loading &&
              displayedProducts.map(product => (
                <ProductCard
                  key={product._id}
                  {...product}
                  favorite={user?.favorites?.includes(product._id)}
                />
              ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}

Category.getInitialProps = async ({ query }) => {
  let productsData = [];
  let error = {};

  try {
    // const querySnapshot = await db
    //   .collection("Products")
    //   .where("category", "==", query.category.toLowerCase())
    //   .get();

    // productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    productsData = await getAllItems();
    productsData = productsData.data.map(doc => ({ id: doc._id, ...doc }));
    console.log(productsData);
  } catch (e) {
    error = e;
  }

  return { productsData, error, query };
};

const defaultProducts = [
  {
    id: "1",
    brand: "Brand A",
    product_name: "Product A",
    cover_photo: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
    price: "100.00",
    sale_price: "80.00"
  },
  {
    id: "2",
    brand: "Brand B",
    product_name: "Product B",
    cover_photo: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
    price: "150.00",
    sale_price: "120.00"
  }
];
