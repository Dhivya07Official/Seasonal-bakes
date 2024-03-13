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
      title: "Velvet Dream",
      desc: "pastries",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710135246/seasonal-bakes/michelle-tsang-1rqk6XVnw44-unsplash_ykajm3.jpg",
      show_type: "horizontal"
    },
    {
      id: "3",
      bgColor: "#f6f6f6",
      name: "Raspberry Ripple Bliss",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710135246/seasonal-bakes/american-heritage-chocolate-vdx5hPQhXFk-unsplash_eejgnz.jpg",
      price: "300",
      sale_price: "200",
      show_type: "vertical"
    },
    {
      id: "4",
      bgColor: "#f6f6f6",
      name: "Triple Chocolate Indulgence",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710135246/seasonal-bakes/pushpak-dsilva-2UeBOL7UD34-unsplash_dk6oi7.jpg",
      price: "200",
      show_type: "vertical"
    },
    {
      id: "5",
      bgColor: "#FBE285",
      title: "Fudgy Hazelnut Brownies",
      desc: "pastries",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710135245/seasonal-bakes/will-echols-P_l1bJQpQF0-unsplash_e1wdtp.jpg",
      show_type: "horizontal"
    },
    {
      id: "6",
      bgColor: "#F9CADA",
      title: "Salted Caramel Delight",
      desc: "pastries",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710135245/seasonal-bakes/mateusz-d-N7IG3Tl3Oj0-unsplash_icis57.jpg",
      show_type: "horizontal"
    },
    {
      id: "7",
      bgColor: "#f6f6f6",
      name: "Mint Chocolate Chunk Brownies",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710132046/seasonal-bakes/jr-r-90HdOlGbjck-unsplash_nqj6il.jpg",
      price: "100",
      show_type: "vertical"
    },
    {
      id: "8",
      bgColor: "#f6f6f6",
      name: "Espresso Infusion Brownies",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710132044/seasonal-bakes/otto-norin-uG3Vu5TXKxE-unsplash_uytklz.jpg",
      price: "150",
      sale_price: "140",
      show_type: "vertical"
    },
    {
      id: "9",
      bgColor: "#99E6B0",
      title: "Lemon Zest",
      desc: "pastries",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710132047/seasonal-bakes/mink-mingle-qZ5lPCPvdXE-unsplash_ugjash.jpg",
      show_type: "horizontal"
    },
    {
      id: "10",
      bgColor: "#f3e6c8",
      title: "Almond Croissant Elegance",
      desc: "pastries",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710132043/seasonal-bakes/heather-barnes-WbZesfqwR-A-unsplash_ccu1cv.jpg",
      show_type: "horizontal"
    },
    {
      id: "11",
      bgColor: "#f6f6f6",
      name: "Berry Burst Tartlet",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710132042/seasonal-bakes/kobby-mendez-w0_w3N_hG00-unsplash_koyckr.jpg",
      price: "150",
      sale_price: "120",
      show_type: "vertical"
    },
    {
      id: "12",
      bgColor: "#f6f6f6",
      name: "Pistachio Cream Puff Cascad",
      image: "https://res.cloudinary.com/dpzml8rsg/image/upload/v1710132041/seasonal-bakes/yulia-khlebnikova-3-JVAA7wNOE-unsplash_atjxti.jpg",
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
          <link rel="icon" href="/favicon.jpeg" />
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        </Head>
        <div className="elfsight-app-4712f651-718e-442b-acaf-cbcb26de9482" data-elfsight-app-lazy></div>
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
