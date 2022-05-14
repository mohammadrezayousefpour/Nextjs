import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <span>is CoffeeStore page : {router?.query.id}</span>
      <button>
        <a href="/">Back To Home with a tag</a>
      </button>
      <button>
        <Link scroll={true} href="/">
          <a>Back To Home with link tag</a>
        </Link>
      </button>
    </div>
  );
};

export function getStaticProps(props) {
  const params = props.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === 1;
      }),
    },
  };
}

export function getStaticPath() {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "300" } },
    ],
  };
}

export default CoffeeStore;
