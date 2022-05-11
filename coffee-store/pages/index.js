import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";
import coffeeStores from "../data/coffee-stores.json";

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
          {coffeeStores.map((coffee) => (
            <Card
              name={coffee.name}
              className={styles.card}
              imgUrl={coffee.imgUrl}
              href={`/coffee-store/${coffee.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
