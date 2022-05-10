import { useRouter } from "next/router";
import React from "react";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);
  return <div>this is CoffeeStore page : {router?.query.id}</div>;
};

export default CoffeeStore;
