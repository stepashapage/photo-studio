import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full bg-[#C3BE10] text-[#000000] h-[100px] mt-[135px] flex justify-between items-center px-[180px] py-[25px]">
      <div className="flex gap-[5px] items-center">
        <Image src="/copyright.svg" alt="logo" width={20} height={20} />
        <p className="font-[600] text-[12px]">
          Платформа обрабатывает персональные данные
        </p>
      </div>

      <menu className="flex gap-[42px]">
        <Link href="/About">О нас</Link>
        <Link href="/Catalog">Каталог</Link>
        <Link href="/Portfolio">Портфолио</Link>
      </menu>

      <ul className="flex gap-[22px]">
        <li>
          <Link
            href="https://web.whatsapp.com/"
            target={"_blank"}
            className="flex justify-center items-center p-[13px] bg-[#fff] bg-opacity-[0.05] rounded-full border-[2px] border-[#000] border-opacity-[0.3]"
          >
            <Image src="/whatsapp.svg" alt="logo" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link
            href="https://2gis.ru/astrakhan/search/Фото%20на%20документы/rubricId/312/firm/70000001036218843?m=48.001316%2C46.364512%2F15.49"
            target={"_blank"}
            className="flex justify-center items-center p-[13px] bg-[#fff] bg-opacity-[0.05] rounded-full border-[2px] border-[#000] border-opacity-[0.3]"
          >
            <Image src="/2gis.svg" alt="logo" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
