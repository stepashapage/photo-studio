import React from "react";
import Image from "next/image";
import CircleBackground from "@/components/ui/circleBackground";

export const portfolioList = [
  {
    title: "14+",
    description: "оценок в соц. сетях",
  },
  {
    title: "5+",
    description: "Лет опыта в индустрии",
  },
  {
    title: "10+",
    description: "Отзывов",
  },
  {
    title: "12",
    description: "товаров в каталонге",
  },
];

export const portfolioList2 = [
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

const Portfolio = () => {
  return (
    <main className="max-w-[1600px] mx-auto px-[20px] z-[1] pt-[100px]">
      <section className="relative w-full grid grid-cols-3 gap-[26px]">
        <CircleBackground className="top-[70%] left-[-25%]" />
        <CircleBackground className="top-[20%] right-[-25%]" />
        {portfolioList2.map((item, i) => (
          <div className="relative w-[487px] h-[487px]" key={i}>
            <Image
              src={item.img}
              alt="photo"
              width={400}
              height={400}
              className="w-[487px] h-[487px] object-cover z-[0]"
            />
            <div className="absolute top-[0] left-[0] w-[487px] h-[487px] bg-[#171717] bg-opacity-[0.4]"></div>
            <div className="flex flex-col gap-[15px] z-[1] absolute bottom-[0] left-[0] bg-[#EDBC5A] bg-opacity-[0.6] px-[19px] py-[16px]">
              <h1 className="font-semiBold text-[24px] leading-[125%] text-[#fff]">
                {item.title}
              </h1>
              <h1 className="font-medium text-[18px] leading-[125%] text-[#fff]">
                {item.desc}
              </h1>
            </div>
          </div>
        ))}
      </section>
      <section className="relative w-full flex gap-[100px] items-center justify-between pt-[115px] relative">
        {portfolioList.map((item, i) => (
          <div className="flex flex-col gap-[25px] items-center" key={i}>
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
