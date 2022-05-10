import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/Banner";

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
      </main>
    </div>
  );
}
