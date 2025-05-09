"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CircleBackground from "../../../components/ui/circleBackground";

const portfolioStats = [
  { title: "14+", description: "оценок в соц. сетях" },
  { title: "5+", description: "Лет опыта в индустрии" },
  { title: "10+", description: "Отзывов" },
  { title: "12", description: "товаров в каталоге" },
];

const portfolioItems = [
  {
    id: 0,
    title: "Новогодние сувениры",
    desc: "Уникальные новогодние сувениры для ваших праздников.",
    img: "/portfolioImage.svg",
  },
  {
    id: 1,
    title: "Комплект фотографий на стену",
    desc: "Создайте уют в вашем доме с нашими комплектами фотографий.",
    img: "/portfolioImage8.svg",
  },
  {
    id: 2,
    title: "Печать визиток",
    desc: "Профессиональная печать визиток для вашего бизнеса.",
    img: "/portfolioImage3.svg",
  },
  {
    id: 3,
    title: "Печать фото на холсте",
    desc: "Высококачественная печать фотографий на холсте.",
    img: "/portfolioImage2.svg",
  },
  {
    id: 4,
    title: "Фотопечать документов",
    desc: "Быстрая и качественная фотопечать ваших документов.",
    img: "/portfolioImage4.svg",
  },
  {
    id: 5,
    title: "Новогодние сувениры",
    desc: "Уникальные новогодние сувениры для ваших праздников.",
    img: "/portfolioImage5.svg",
  },
  {
    id: 6,
    title: "Магниты с фото",
    desc: "Индивидуальные магниты с вашими фотографиями.",
    img: "/portfolioImage6.svg",
  },
  {
    id: 7,
    title: "Ламинация документов",
    desc: "Защитите ваши документы с помощью ламинации.",
    img: "/portfolioImage7.svg",
  },
  {
    id: 8,
    title: "Печать фото на холсте",
    desc: "Высококачественная печать фотографий на холсте.",
    img: "/portfolioImage1.svg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, ease: "easeOut" },
  }),
};

const Portfolio = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-16 relative z-10">
      {/* Фоновые круги */}
      <CircleBackground className="absolute top-[70%] left-[-15%] opacity-10 pointer-events-none" />
      <CircleBackground className="absolute top-[20%] right-[-15%] opacity-10 pointer-events-none" />

      {/* Портфолио с карточками */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-gray-900">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i < 3}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-black/70 to-transparent ">
              <h3 className="text-white text-[22px] font-semibold mb-2 leading-[1.2]">
                {item.title}
              </h3>
              <p className="text-gray-300 text-[14px] leading-[1.5] max-w-[90%]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Статистика с крупным шрифтом */}
      <section className="relative w-full flex gap-[100px] items-center justify-between relative">
        {portfolioStats.map((item, i) => (
          <div className="flex flex-col gap-[0px] items-center" key={i}>
            <h1 className="font-regular text-[120px] leading-[auto]">
              {item.title}
            </h1>
            <h1 className="font-bold text-[16px] leading-[29px] tracking-[4px] uppercase text-center">
              {item.description}
            </h1>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Portfolio;
