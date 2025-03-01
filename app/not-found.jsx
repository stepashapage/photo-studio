"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Description } from "@/components/ui/desc";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-[95vh]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center gap-[30px] w-[1296px] h-[700px] p-[80px] bg-[#1A1717] rounded-[20px] shadow-[0_0_80px_0_rgba(237,188,90,0.3)] relative"
      >
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-regular text-[120px] leading-[100%] text-white tracking-[2px] relative">
            Ооой!
          </h1>
          <p className="font-regular text-[38px] leading-[150%] text-white">
            Такой страницы не существует
          </p>
          <Link
            href="/"
            className="w-[300px] flex items-center gap-[17px] border border-[#B0B0B0] border-opacity-[0.3] rounded-[57px] px-[30px] py-[13px] my-[10px]"
          >
            Вернуться на главную
            <MoveRight size={20} color="#EDBC5A" strokeWidth={1.5} />
          </Link>
          <menu className="flex gap-[45px] justify-center w-[60%] pt-[10px]">
            <Link
              href="https://2gis.ru/astrakhan/search/Фото%20на%20документы/rubricId/312/firm/70000001036218843?m=48.001316%2C46.364512%2F15.49"
              target={"_blank"}
              className="flex justify-center items-center gap-[15px]"
            >
              <Image src="/2gis.svg" alt="logo" width={20} height={20} />
              <p className="font-regular text-[14px] leading-[100%]">2gis</p>
            </Link>
            <Link
              href="https://web.whatsapp.com/"
              target={"_blank"}
              className="flex justify-center items-center gap-[15px]"
            >
              <Image src="/whatsapp.svg" alt="logo" width={20} height={20} />
              <p className="font-regular text-[14px] leading-[100%]">
                whatsapp
              </p>
            </Link>
          </menu>
        </div>
        <Image
          src="/404.svg"
          alt="logo"
          width={500}
          height={500}
          className="w-[613px] h-[437px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default page;
