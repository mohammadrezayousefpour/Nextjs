import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/Banner";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hello my friend");
  };
  return (
    <div className={styles.container}>
      <Head></Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coffee Connoisseur</h1>
        <Banner
          buttonText="View Stores nearby"
          handleOnclick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
