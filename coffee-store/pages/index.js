import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/Banner";
import Image from "next/image";
import Card from "../components/card/Card";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hello my friend");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Stores nearby"
          handleOnclick={handleOnBannerBtnClick}
        />
        <div className={styles.cardLayout}>
          <Card
            name="coffee shop 1"
            className={styles.card}
            imgUrl="/../public/static/coffee-shops/1.jpg"
            href="/coffee-store/first coffee"
          />
          <Card
            name="coffee shop 1"
            className={styles.card}
            imgUrl="/../public/static/coffee-shops/1.jpg"
            href="/coffee-store/first coffee"
          />
          <Card
            name="coffee shop 1"
            className={styles.card}
            imgUrl="/../public/static/coffee-shops/1.jpg"
            href="/coffee-store/first coffee"
          />
          <Card
            name="coffee shop 1"
            className={styles.card}
            imgUrl="/../public/static/coffee-shops/1.jpg"
            href="/coffee-store/first coffee"
          />
          <Card
            name="coffee shop 1"
            className={styles.card}
            imgUrl="/../public/static/coffee-shops/1.jpg"
            href="/coffee-store/first coffee"
          />
          <Card
            name="coffee shop 1"
            className={styles.card}
            imgUrl="/../public/static/coffee-shops/1.jpg"
            href="/coffee-store/first coffee"
          />
        </div>
      </main>
    </div>
  );
}
