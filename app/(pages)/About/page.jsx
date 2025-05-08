"use client";

import React from "react";
import { motion } from "framer-motion";
import { Description } from "../../../components/ui/desc";
import { Title } from "../../../components/ui/title";
import Image from "next/image";
import Link from "next/link";
import CircleBackground from "../../../components/ui/circleBackground";
import { MapLocal } from "../../../components/shared/mapLocal";

const About = () => {
  return (
    <main className="max-w-[1600px] mx-auto px-[20px] z-[1] pt-[50px]">
      <section className="relative w-full flex flex-col gap-[250px]">
        {/* Анимация для заголовка */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* <Image
            src="/SuperToroid-Black-Matte2.svg"
            alt="arrow"
            width={750}
            height={780}
            className="absolute left-[0%] top-[0%] w-[365px] h-[322px]"
          /> */}
          <Title
            text="ПОЧЕМУ"
            strong=""
            className="flex flex-col text-start"
            className1="font-regular text-[50px] leading-[125%] pb-[35px]"
          />
          <Title
            text="НАС "
            strong="ВЫБИРАЮТ"
            className="flex flex-row-reverse justify-end items-end gap-[25px]"
            className1="font-regular text-[50px] leading-[100%] pb-[5px]"
            className2="font-regular text-[85px] leading-[100%] "
          />
        </motion.div>

        {/* Анимация для левого блока */}
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 500 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[720px] h-[350px] 
                    absolute top-[100px] right-[25%] translate-x-[-50%]"
        >
          <Image
            src="/aboutPage.svg"
            alt="arrow"
            width={750}
            height={780}
            className="absolute right-[-9%] top-[0%] w-[750px] h-[780px]"
          />
        </motion.div>

        {/* Анимация для правого блока */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-[30px]"
        >
          <Description
            className="text-[16px] leading-[29px] font-regular opacity-60 w-[760px]"
            text="Мы гордимся тем, что предоставляем клиентам высококачественные фотоуслуги, сочетая индивидуальный подход с профессионализмом. Наши товары и услуги всегда готовы удовлетворить любые ваши пожелания. Обращаясь к нам, вы получаете не только красивые фотографии, но и приятные воспоминания."
          />
          <div className="grid grid-cols-2 gap-[55px] w-[800px]">
            <div
              className="flex flex-col gap-[15px] relative w-[340px]
          after:absolute after:bottom-[-40px] after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#fff]"
            >
              <h1 className="font-regular text-[28px] leading-[auto]">
                Информация
              </h1>
              <div className="flex flex-col gap-[15px]">
                <Description
                  className="text-[16px] leading-[29px] font-regular opacity-60"
                  text="Более 5 лет на рынке"
                />
                <Description
                  className="text-[16px] leading-[29px] font-regular opacity-60"
                  text="Цены ниже чем у конкурентов"
                />
              </div>
            </div>
            <div
              className="flex flex-col gap-[15px] relative w-[340px]
          after:absolute after:bottom-[-40px] after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#fff]"
            >
              <h1 className="font-regular text-[28px] leading-[auto]">
                Социальные сети
              </h1>
              <div className="flex flex-col gap-[15px]">
                <Link
                  href="https://2gis.ru/astrakhan/search/Фото%20на%20документы/rubricId/312/firm/70000001036218843?m=48.001316%2C46.364512%2F15.49"
                  target={"_blank"}
                >
                  <Description
                    className="text-[16px] leading-[29px] font-regular opacity-60"
                    text="2Gis"
                  />
                </Link>

                <Link href="https://web.whatsapp.com/" target={"_blank"}>
                  <Description
                    className="text-[16px] leading-[29px] font-regular opacity-60"
                    text="WhatsApp"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="relative w-full flex gap-[100px] items-center pt-[280px] relative">
        <CircleBackground className="left-[-15%] top-[0]" />

        <div className="flex flex-col gap-[30px]">
          <h2 className="font-[100] text-[16px] leading-[29px] text-[#EDBC5A] tracking-[3px]">
            О НАШЕЙ КОМПАНИИ
          </h2>
          <h1 className="font-regular text-[50px] leading-[auto] w-[80%]">
            Лучшее фотоателье с креативным подходом
          </h1>
          <Description text="Мы стремимся к совершенству в каждом кадре, создавая уникальные и запоминающиеся фотографии. В нашей компании используют современное оборудование и инновационные техники, чтобы запечатлеть ваши самые важные моменты с максимальной точностью и эмоциональностью." />
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-regular text-[120px] leading-[auto]">
                <strong className="font-regular text-[64px]">с</strong> 9.00
              </h1>
              <h1 className="font-bold text-[16px] leading-[29px] tracking-[4px]">
                ВРЕМЯ РАБОТЫ
              </h1>
            </div>
            <div className="">
              <h1 className="font-regular text-[120px] leading-[auto]">5+</h1>
              <h1 className="font-bold text-[16px] leading-[29px] tracking-[4px] uppercase">
                Лет опыта в индустрии
              </h1>
            </div>
          </div>
        </div>
        <Image
          src="/ImageSvgDetails.svg"
          alt="photo"
          width={560}
          height={520}
          className="w-[560px] h-[520px] object-cover"
        />
      </section>
      <section className="relative w-full pt-[115px]">
        <MapLocal />
      </section>
    </main>
  );
};

export default About;
