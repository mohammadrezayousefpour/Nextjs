import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const nextjs = () => {
  const router = useRouter();
  const [query, setQuery] = useState();
  const title = router.query.name;

  useEffect(() => {
    if (router) {
      setQuery(router.query.name);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>welcome to pisca Academi {query} course</div>
    </>
  );
};

export default nextjs;
