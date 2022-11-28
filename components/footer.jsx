import ubitexLogo from "../assets/img/logo-01.png";
import { footer_data } from "../data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark:bg-[#04162d] bg-gray-100 pt-5 dark:shadow-[0_-15px_40px_-15px_rgba(6,37,70,0.7)] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.1)]">
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

      <div className="border-b dark:border-b-[#062042] border-gray-300 my-6"></div>

      <div className="flex flex-col justify-center items-center pb-6">
        <span>تلفن تماس: 91001716 - ساعت 9 الی 17</span>
        <span>تمام حقوق این سایت متعلق به یوبیتکس می باشد.</span>
      </div>
    </footer>
  );
};

export default Footer;
