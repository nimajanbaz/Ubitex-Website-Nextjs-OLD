import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../assets/img/logo-Ubitex.png";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const menuItems = [
    {
      id: 1,
      title: "قیمت لحظه‌ای",
      href: "https://app.ubitex.io/markets",
    },
    {
      id: 2,
      title: "راهنمای استفاده",
      href: "/guide",
    },
    {
      id: 3,
      title: "تالار معاملات",
      href: "https://app.ubitex.io",
    },
    {
      id: 4,
      title: "امکانات",
      href: "",
    },
    {
      id: 5,
      title: "بلاگ",
      href: "/blog",
    },
    {
      id: 6,
      title: "اپلیکیشن",
      href: "/app",
    },
  ];
  return (
    <Popover className="relative dark:bg-[#051a36] bg-white">
      <div className="w-full dark:shadow-[0_15px_40px_0px_rgba(6,37,70,0.7)] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between py-4 md:justify-start md:space-x-10`}>
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <Image
                  className="h-12 w-auto sm:h-10"
                  src={logo}
                  alt="Ubitex Logo"
                  width={"auto"}
                  height={"auto"}
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-3 md:flex">
              {menuItems.map((item) => {
                return (
                  <div key={item.id}>
                    <Link
                      href={item.href}
                      className="text-base font-medium dark:text-gray-300 hover text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all px-4 py-2 hover:bg-[#f39200] hover:bg-opacity-10 rounded-md">
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#f39200] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#ce7c00]">
                ورود / ثبت نام
              </a>
              <div className="ml-3">
                <span
                  className="text-2xl cursor-pointer dark:text-gray-300 text-gray-600 hover:text-[#f39200] dark:hover:text-[#f39200] transition-all"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "light" ? <RiMoonClearFill /> : <RiSunLine />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg">
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                {menuItems.map((item) => {
                  return (
                    <div key={item.id}>
                      <Link
                        to={item.href}
                        className={`text-base font-medium text-gray-500 hover:text-[#f39200]
                        `}>
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-center text-base font-medium text-gray-500">
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#f39200] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#ce7c00]">
                  ورود / ثبت نام
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
