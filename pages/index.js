import React from "react";
import Head from "next/head";

import HeroSection from "../components/HeroSection";
import OurTarget from "../components/OurTarget";
import ShowCase from "../components/ShowCase";

export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>The Connected Awards | Africa</title>
        <meta
          name="The Connected Awards | Africa"
          content=" The Connected Awards | Africa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <OurTarget />
      <ShowCase />
    </>
  );
}
