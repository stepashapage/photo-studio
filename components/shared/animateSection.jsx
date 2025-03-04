"use client";

import React from "react";
import { motion } from "framer-motion";
import { Description } from "../ui/desc";
import { Title } from "../ui/title";
import Image from "next/image";

export const AnimateSection = () => {
  return (
    <>
      {/* Анимация для заголовка */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          text="Запечатляем"
          strong="Мгновения"
          className="flex flex-col text-end"
          className1="font-extrabold text-[85px] leading-[125%]"
          className2="font-regular text-[85px] leading-[125%]"
        />
      </motion.div>

      {/* Анимация для левого блока */}
      <motion.div
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: -400 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col pt-[50px] pr-[80px] pb-[45px] pl-[65px] gap-[30px] w-[720px] h-[350px] border border-opacity-[0.34] border-[#fff]
                    bg-[#fff] bg-opacity-[0.10] absolute top-[100px] left-[25%] translate-x-[-50%] rounded-[38px]"
      >
        <h1 className="font-medium text-[51px] leading-[125%]">
          Наши преимущества
        </h1>
        <Description
          text="В нашем фотоателье мы ценим каждого клиента и стремимся предоставить
        максимально качественные услуги. Мы используем только
        профессиональное оборудование и современные технологии обработки
        фотографий."
        />
        <Image
          src="/Vector.svg"
          alt="arrow"
          width={50}
          height={50}
          className="absolute right-[-5%] top-[-12%] w-[45px] h-[45px]"
        />
        <Image
          src="/Vector-1.svg"
          alt="arrow"
          width={50}
          height={50}
          className="absolute right-[2%] top-[-18%] w-[50px] h-[50px]"
        />
        <Image
          src="/Vector-2.svg"
          alt="arrow"
          width={50}
          height={50}
          className="absolute right-[-9%] top-[0%] w-[50px] h-[50px]"
        />
      </motion.div>

      {/* Анимация для правого блока */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-end gap-[26px] text-end"
      >
        <h1
          className="font-medium text-[60px] leading-[125%] tracking-[-1px] w-[650px] relative
        after:content-[''] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#C3BE10] after:via-[#C3BE1043] after:to-[transparent] after:absolute after:left-0 after:bottom-[-10px] after:rounded-full"
        >
          Ваше фотоателье для ярких моментов
        </h1>
        <Description
          className="w-[800px]"
          text="Добро пожаловать в наше фотоателье, где каждый кадр становится
        произведением искусства. Мы предлагаем профессиональные услуги
        фотосъемки для любых событий: свадеб, семейных портретов,
        бизнес-фотосессий и многого другого."
        />
      </motion.div>
    </>
  );
};
