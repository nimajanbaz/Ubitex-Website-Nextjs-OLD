import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";

const Terms = () => {
  return (
    <>
      <Head>
        <title>درباره ما | صرافی ارزدیجیتال یوبیتکس</title>
        <meta
          name="description"
          content="صرافی ارز دیجیتال یوبیتکس معتبرترین و بهترین صرافی آنلاین ارز دیجیتال ایرانی با ارائه خدمات حرفه ای در خرید و فروش انواع ارزهای دیجیتال | ☎️91001716"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isDark={false} />

      <div className="px-4 sm:px-6 text-right max-w-[1200px] mx-auto my-20">
        <h2>قوانین</h2>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
