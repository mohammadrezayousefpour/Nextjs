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
        {/* <div className={styles.heroImage}>
          <Image
            src="/static/3.1 hero-image.png"
            width={700}
            height={400}
          ></Image>
        </div> */}
        <Card
          name="coffee shop 1"
          imgUrl="/../public/static/coffee-shops/1.jpg"
          href="/coffee-store/first coffee"
        />
      </main>
    </div>
  );
}
