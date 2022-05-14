import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";

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
  return {
    paths: [
      // { params: { id: "0" } },
      // { params: { id: "1" } },
      // { params: { id: "300" } },
    ],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log(props);
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <span>is CoffeeStore page : {router?.query.id}</span>
      <a href="/">Back To Home with a tag</a>
      <Link scroll={true} href="/">
        <a>Back To Home with link tag</a>
      </Link>
      <p>{props.coffeeStore.name}</p>
      <p>{props.coffeeStore.address}</p>
    </div>
  );
};

export default CoffeeStore;
