import Head from "next/head";
import styles from "./index.module.scss";

import Button from "components/FilterButton";
import HorizontalCard from "components/HomeCard/horizontal-card";
import VerticalCard from "components/HomeCard/vertical-card";
import Products from "components/HomeProducts";

import { db } from "config/firebase";
import Layout from "components/Layout";

import { useAuth } from "../firebase/context";

export default function Home() {
  const auth = useAuth();

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
              <span className={styles.emoji}>⚡</span>New In
            </h1>
            <div className={styles.headerButtons}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div>
          </div>

          <Products>
            <HorizontalCard
              bgColor="#BCE7F0"
              title="Get up to 50% off"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
            />
            <HorizontalCard
              bgColor="#dec8f3"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              title="pastries"
              desc="pastries"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="pastries"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              price="300"
              sale_price="200"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="pastries"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              price="200"
            />
          </Products>
          <Products reverse>
            <HorizontalCard
              bgColor="#FBE285"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              title="pastries"
              desc="pastries"
            />
            <HorizontalCard
              bgColor="#F9CADA"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              title="pastries"
              desc="pastries"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="pastries"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              price="100"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="pastries"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              price="150"
              sale_price="140"
            />
          </Products>
          <Products>
            <HorizontalCard
              bgColor="#99E6B0"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              title="pastries"
              desc="pastries"
            />
            <HorizontalCard
              bgColor="#f3e6c8"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              title="pastries"
              desc="pastries"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="pastries"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              price="150"
              sale_price="120"
            />

            <VerticalCard
              bgColor="#f6f6f6"
              name="pastries"
              image="https://images.unsplash.com/photo-1636743715220-d8f8dd900b87"
              price="150"
            />
          </Products>
        </main>
      </div>
    </Layout>
  );
}
