import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import classes from "../../styles/coffee-stores.module.css";
import Image from "next/image";
import cls from "classnames";

export function getStaticProps(props) {
  const params = props.params;
  console.log(params);
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffee) => {
    return {
      params: {
        id: coffee.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

const handleUpvoteButton = () => {
  console.log("salam");
};

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log(props);
  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <div className={classes.layout}>
      <Head>
        <title>{props.coffeeStore.name}</title>
      </Head>
      <div className={classes.container}>
        <div className={classes.col1}>
          <div className={classes.backToHomeLink}>
            <Link href="/">
              <a>Back To home</a>
            </Link>
          </div>
          <div className={classes.nameWrapper}></div>
          <h1 className={classes.name}>{props.coffeeStore.name}</h1>
          <Image
            src={props.coffeeStore.imgUrl}
            width={600}
            height={360}
            className={classes.storeImage}
            alt={props.coffeeStore.name}
          ></Image>
        </div>
        <div className={cls("glass", classes.col2)}>
          <div className={classes.iconWrapper}>
            <Image src="/static/icons/push.svg" width={24} height={24}></Image>
            <p className={classes.text}>{props.coffeeStore.address}</p>
          </div>
          <div className={classes.iconWrapper}>
            <Image src="/static/icons/place.svg" width={24} height={24}></Image>
            <p className={classes.text}>{props.coffeeStore.neighbourhood}</p>
          </div>
          <div className={classes.iconWrapper}>
            <Image src="/static/icons/start.svg" width={24} height={24}></Image>
            <p className={classes.text}>5</p>
          </div>
          <button className={classes.upVoteButton} onClick={handleUpvoteButton}>
            Up vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
