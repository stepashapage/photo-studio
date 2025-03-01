import React from "react";
import Image from "next/image";
import { Description } from "@/components/ui/desc";

export const listAdvantages = [
  {
    id: 0,
    title: "Инновационные решения",
    desc: "Мы используем передовые технологии и креативные идеи, чтобы ваши фотографии выделялись  и привлекали внимание",
    img: "/Advantages1.svg",
  },
  {
    id: 1,
    title: "Преобразование идей в шедевры",
    desc: "Наша компания превращает ваши идеи в эффективные и эмоциональные продукты, которые не только привлекают внимание, но и оставляют незабываемые впечатления",
    img: "/Advantages2.svg",
  },
  {
    id: 2,
    title: "Отзывов",
    desc: "С нашей помощью ваши фотографии достигают миллионов людей, обеспечивая вовлеченность  целевой аудитории.",
    img: "/Advantages3.svg",
  },
];

export const AdvantagesList = () => {
  return (
    <div className="w-full py-[75px] px-[92px] border border-opacity-[0.3] border-[#C3BE10] bg-[#fff] bg-opacity-[0.10] rounded-[25px] grid grid-cols-3 gap-[71px]">
      {listAdvantages.map((item, _) => (
        <div key={item.id} className="flex flex-col gap-[45px]">
          <div className="flex flex-row items-center gap-[30px] h-[90px]">
            <Image
              src={item.img}
              alt="photo"
              width={90}
              height={84}
              className="w-[80px] h-[74px]"
            />
            <h1 className=" font-medium text-[28px] leading-[138%]">
              {item.title}
            </h1>
          </div>
          <Description text={item.desc} />
        </div>
      ))}
    </div>
  );
};
