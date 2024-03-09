import Head from "next/head";
import styles from "./index.module.scss";

import Button from "components/FilterButton";
import HorizontalCard from "components/HomeCard/horizontal-card";
import VerticalCard from "components/HomeCard/vertical-card";
import Products from "components/HomeProducts";

import Layout from "components/Layout";


export default function Home() {
  const products = [
    {
      id: "1",
      bgColor: "#BCE7F0",
      title: "Get up to 50% off",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      show_type: "horizontal"
    },
    {
      id: "2",
      bgColor: "#dec8f3",
      title: "pastries",
      desc: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      show_type: "horizontal"
    },
    {
      id: "3",
      bgColor: "#f6f6f6",
      name: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "300",
      sale_price: "200",
      show_type: "vertical"
    },
    {
      id: "4",
      bgColor: "#f6f6f6",
      name: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "200",
      show_type: "vertical"
    },
    {
      id: "5",
      bgColor: "#FBE285",
      title: "pastries",
      desc: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      show_type: "horizontal"
    },
    {
      id: "6",
      bgColor: "#F9CADA",
      title: "pastries",
      desc: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      show_type: "horizontal"
    },
    {
      id: "7",
      bgColor: "#f6f6f6",
      name: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "100",
      show_type: "vertical"
    },
    {
      id: "8",
      bgColor: "#f6f6f6",
      name: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "150",
      sale_price: "140",
      show_type: "vertical"
    },
    {
      id: "9",
      bgColor: "#99E6B0",
      title: "pastries",
      desc: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      show_type: "horizontal"
    },
    {
      id: "10",
      bgColor: "#f3e6c8",
      title: "pastries",
      desc: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      show_type: "horizontal"
    },
    {
      id: "11",
      bgColor: "#f6f6f6",
      name: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "150",
      sale_price: "120",
      show_type: "vertical"
    },
    {
      id: "12",
      bgColor: "#f6f6f6",
      name: "pastries",
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      price: "150",
      sale_price: "120",
      show_type: "vertical"
    }
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Seasonal bakes</title>
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
              bgColor={products[0].bgColor}
              title={products[0].title}
              image={products[0].image}
            />
            <HorizontalCard
              bgColor={products[1].bgColor}
              image={products[1].image}
              title={products[1].title}
              desc={products[1].desc}
            />
            <VerticalCard
              bgColor={products[2].bgColor}
              name={products[2].name}
              image={products[2].image}
              price={products[2].price}
              sale_price={products[2].sale_price}
            />
            <VerticalCard
              bgColor={products[3].bgColor}
              name={products[3].name}
              image={products[3].image}
              price={products[3].price}
            />
          </Products>
          <Products reverse>
            <HorizontalCard
              bgColor={products[4].bgColor}
              image={products[4].image}
              title={products[4].title}
              desc={products[4].desc}
            />
            <HorizontalCard
              bgColor={products[5].bgColor}
              image={products[5].image}
              title={products[5].title}
              desc={products[5].desc}
            />
            <VerticalCard
              bgColor={products[6].bgColor}
              name={products[6].name}
              image={products[6].image}
              price={products[6].price}
            />
            <VerticalCard
              bgColor={products[7].bgColor}
              name={products[7].name}
              image={products[7].image}
              price={products[7].price}
              sale_price={products[7].sale_price}
            />
          </Products>
          <Products>
            <HorizontalCard
              bgColor={products[8].bgColor}
              image={products[8].image}
              title={products[8].title}
              desc={products[8].desc}
            />
            <HorizontalCard
              bgColor={products[9].bgColor}
              image={products[9].image}
              title={products[9].title}
              desc={products[9].desc}
            />
            <VerticalCard
              bgColor={products[10].bgColor}
              name={products[10].name}
              image={products[10].image}
              price={products[10].price}
              sale_price={products[10].sale_price}
            />

            <VerticalCard
              bgColor={products[11].bgColor}
              name={products[11].name}
              image={products[11].image}
              price={products[11].price}
            />
          </Products>
        </main>
      </div>
    </Layout>
  );
}
