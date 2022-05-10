import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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

export default CoffeeStore;
