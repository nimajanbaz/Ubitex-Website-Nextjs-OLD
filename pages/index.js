import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Navbar from "../components/navbar";
import { Table } from "../components/table";
import about from "../assets/img/about-2.webp";
import ubitexLogo from "../assets/img/logo-01.png";
import mobileApp from "../assets/img/5.webp";
import {
  header_images,
  header_boxes,
  center_boxes,
  footer_data,
} from "../data";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState();

  const columns = useMemo(
    () => [
      {
        Header: "نام / نماد	",
        accessor: "desName",
        Cell: (props) => {
          const { desName, desNameFa, destinationIcon } = props.row.original;
          return (
            <div className="flex cursor-pointer space-x-2 space-x-reverse">
              <div className="w-10">
                <Image
                  src={destinationIcon}
                  alt={desNameFa}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col">
                <span>{desName}</span>
                <span className="text-sm">{desNameFa}</span>
              </div>
            </div>
          );
        },
      },
      {
        Header: "خرید",
        accessor: "bestBuy",
        Cell: (props) => {
          const { bestBuy } = props.row.original;
          return (
            <div className="flex items-center text-sm cursor-pointer">
              <span>{bestBuy}</span>
            </div>
          );
        },
      },
      {
        Header: "فروش",
        accessor: "bestSell",
        Cell: (props) => {
          const { bestSell } = props.row.original;
          return (
            <div className="flex items-center text-sm cursor-pointer">
              <span>{bestSell}</span>
            </div>
          );
        },
      },
      {
        Header: "آخرین معامله",
        accessor: "latestTrade",
        Cell: (props) => {
          const { latestTrade } = props.row.original;
          return (
            <div className="flex items-center text-sm cursor-pointer">
              <span>{latestTrade}</span>
            </div>
          );
        },
      },
      {
        Header: "تغییرات 24 ساعت",
        accessor: "change",
        Cell: (props) => {
          const { change } = props.row.original;
          return (
            <div className="flex items-center">
              <span
                className={`flex items-center text-sm cursor-pointer px-3 py-2 rounded bg-opacity-10 ${
                  change > 0
                    ? "bg-emerald-600 text-emerald-600"
                    : "bg-red-600 text-red-600"
                }`}>
                %{change}
              </span>
            </div>
          );
        },
      },
      {
        Header: "نمودار 7 روز گذشته",
        accessor: "chartSvg",
        Cell: (props) => {
          const { chartSvg, change, desNameFa } = props.row.original;
          return (
            <div
              className={`flex items-center cursor-pointer ${
                change > 0 ? "filter-green" : "filter-red"
              }`}>
              <img src={chartSvg} alt={desNameFa} />
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "action",
        Cell: () => (
          <Link href={"/redirect-to-platform"}>
            <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
              خرید / فروش
            </button>
          </Link>
        ),
      },
    ],

    []
  );

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://api.ubitex.io/api/PublicApi/market")
        .then((res) => {
          const all = res.data.markets;
          setData(all.filter((item) => item.srcName === "USDT"));
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>یوبیتکس | بهترین صرافی ارز دیجیتال ایرانی</title>
        <meta
          name="description"
          content="صرافی ارز دیجیتال یوبیتکس معتبرترین و بهترین صرافی آنلاین ارز دیجیتال ایرانی با ارائه خدمات حرفه ای در خرید و فروش انواع ارزهای دیجیتال | ☎️91001716"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#04162d]">
        <div className="mx-auto text-white">
          <Navbar isDark={true} />
          <div className="mx-auto">
            <div className="max-w-[1600px] flex justify-center items-center mx-auto">
              {/* Left Box */}
              <div className="w-8/12 top-5 relative max-lg:hidden min-h-[770px]">
                {header_images.map((image) => {
                  return (
                    <Image
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      className={image.class}
                      width={"auto"}
                      height={"auto"}
                    />
                  );
                })}
              </div>

              {/* Right Box */}
              <div className="flex flex-col space-y-7 items-end lg:w-4/12 md:w-full text-right">
                <div className="flex flex-col space-y-7">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl">...داستان پول عوض شد</h3>
                    <h1 className="text-[#f39200] text-4xl font-semibold">
                      صرافی ارز دیجیتال یوبیتکس
                    </h1>
                    <h3 className="text-2xl">پلتفرم مبادلات رمزارزی شما</h3>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-xl">خرید و فروش بیش از 100 رمزارز</h2>
                    <h2 className="text-xl">
                      در تالار معاملات با کارمزد ثابت 0.0025
                    </h2>
                  </div>
                </div>

                <div className="flex space-x-3 space-x-reverse flex-row-reverse mt-3">
                  <Link href="/redirect-to-platform">
                    <button className="px-6 py-2 bg-[#f39200] rounded-md">
                      <span>ثبت نام</span>
                    </button>
                  </Link>
                  <Link href="/app">
                    <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
                      <span>دانلود اپلیکیشن</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] bg-[#04162d] space-y-20">
              <div className="grid lg:grid-cols-4 md:grid-cols-1 max-w-[1500px] items-center mx-auto ">
                {header_boxes.map((data) => {
                  return (
                    <div
                      className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] p-7 hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-2xl flex flex-col items-end space-y-2 md:mb-3 lg:-mt-16 z-30"
                      key={data.id}>
                      <Image
                        src={data.image}
                        alt=""
                        className="w-14 text-right bg-[#062246] rounded-lg p-3"
                        width={"auto"}
                        height={"auto"}
                      />
                      <span>{data.title}</span>
                      <p className="text-xs text-right">{data.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col max-w-[1600px] mx-auto mt-10">
                <h3 className="text-2xl text-[#f39200] font-semibold text-right">
                  ارزهای دیجیتال یوبیتکس
                </h3>
                {data ? (
                  <div className="max-md:overflow-scroll">
                    <Table columns={columns} data={data.slice(0, 10)} />
                    <div className="flex mx-auto justify-center items-center  mt-9 mb-5">
                      <Link
                        href={"/redirect-to-platform"}
                        className="text-[#f39200] cursor-pointer transition-all text-lg px-4 py-2 bg-[#f39200] bg-opacity-10 rounded-md">
                        <span>مشاهده تمام ارزهای دیجیتال</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="my-10 flex justify-center items-center">
                    <p>...درحال بارگزاری</p>
                  </div>
                )}
              </div>

              <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1600px] mx-auto items-center text-right">
                <div>
                  <div className="flex flex-col space-y-3 mb-3">
                    <h3 className="text-3xl font-semibold text-[#f39200]">
                      امکانات
                    </h3>
                    <span>برخی از امکانات پلتفرم یوبیتکس</span>
                  </div>
                  <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-7">
                    {center_boxes.map((data) => {
                      return (
                        <div
                          className="shadow-[0_15px_40px_-15px_rgba(6,37,70,1)] p-7 hover:bg-[#07244b] backdrop-blur hover:backdrop-blur bg-[#051a36] bg-opacity-25 hover:bg-opacity-30 transition-all rounded-lg"
                          key={data.id}>
                          <Image
                            src={data.image}
                            alt=""
                            className="w-14 text-right bg-[#062246] rounded-lg p-3"
                            width={"auto"}
                            height={"auto"}
                          />
                          <span>{data.title}</span>
                          <p className="text-xs mt-3">{data.description}</p>
                          <span className="text-[#f39200] text-xs mt-3 cursor-pointer">
                            مطالعه بیشتر
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Image
                    src={about}
                    alt=""
                    className="mx-auto animate-ver_5s"
                    width={"auto"}
                    height={"auto"}
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1600px] mx-auto items-center text-right">
                <div>
                  <Image
                    src={mobileApp}
                    alt=""
                    className="mx-auto animate-ver_5s"
                    width={"auto"}
                    height={"auto"}
                  />
                </div>

                <div>
                  <div className="flex flex-col space-y-5 mb-3">
                    <div className="flex flex-col space-y-2">
                      <span className="text-2xl">با اپلیکیشن موبایل</span>
                      <span className="text-4xl font-semibold text-[#f39200]">
                        صرافی ارز دیجیتال یوبیتکس
                      </span>
                      <span className="text-2xl">همیشه بروز باشید</span>
                    </div>
                    <p>
                      ترید آسان، همه جا و همه وقت از طریق اپلیکیشن موبایل
                      یوبیتکس
                    </p>
                    <div className="flex justify-end">
                      <button className="px-4 py-2 border border-[#f39200] rounded-md text-[#f39200] transition-all hover:bg-[#f39200] hover:text-white">
                        دانلود اپلیکیشن
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#04162d]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10  max-w-[1300px] mx-auto items-center">
          <div className="grid grid-col text-center">
            <span className="text-[#f39200] text-xl font-semibold mb-3">
              یوبیتکس
            </span>
            {footer_data.support.map((item) => {
              return (
                <Link href={item.href} key={item.id} className="mb-2">
                  <span className="hover:text-[#f39200] transition-all">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="grid grid-col text-center">
            <span className="text-[#f39200] text-xl font-semibold mb-3">
              خدمات
            </span>
            {footer_data.services.map((item) => {
              return (
                <Link href={item.href} key={item.id} className="mb-2">
                  <span className="hover:text-[#f39200] transition-all">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="grid grid-col text-center">
            <span className="text-[#f39200] text-xl font-semibold mb-3">
              پشتیبانی
            </span>
            {footer_data.ubitex.map((item) => {
              return (
                <Link href={item.href} key={item.id} className="mb-2">
                  <span className="hover:text-[#f39200] transition-all">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
          <div>
            <Image
              src={ubitexLogo}
              alt=""
              className="mx-auto w-2/3"
              width={"auto"}
              height={"auto"}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 gap-10 max-w-[1300px] mx-auto items-center my-6">
          {footer_data.download_app.map((img) => {
            return (
              <Link href={img.href}>
                <Image
                  src={img.img}
                  alt=""
                  key={img.id}
                  width={"auto"}
                  height={"auto"}
                />
              </Link>
            );
          })}
        </div>

        <div className="border-b border-b-[#062042] my-6"></div>

        <div className="flex flex-col justify-center items-center pb-6">
          <span>تلفن تماس: 91001716 - ساعت 9 الی 17</span>
          <span>تمام حقوق این سایت متعلق به یوبیتکس می باشد.</span>
        </div>
      </footer>
    </>
  );
}
