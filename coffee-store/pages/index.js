import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";
import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  console.log("server side");
  return {
    props: {
      coffeeStoresPorps: coffeeStores,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  console.log("client side");
  console.log(props);
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
        {props.coffeeStoresPorps.length > 0 ? (
          <>
            <h2 className={styles.heading2}>List of coffee Store</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStoresPorps.map((coffee, index) => (
                <Card
                  key={coffee.id}
                  name={coffee.name}
                  className={styles.card}
                  imgUrl={coffee.imgUrl}
                  href={`/coffee-store/${coffee.id}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
