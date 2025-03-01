import { Check } from "lucide-react";
import React from "react";

export const listOffers = [
  {
    id: 0,
    title: "Фотопечать",
    price: "15",
    desc: [
      "Высокое качество печати",
      "Быстрая обработка заказов",
      "Широкий выбор форматов",
      "Доступные цены",
    ],
  },
  {
    id: 1,
    title: "Печать визиток",
    price: "65",
    desc: [
      "Профессиональный дизайн",
      "Высококачественные материалы",
      "Быстрая печать",
      "Индивидуальный подход",
    ],
  },
  {
    id: 2,
    title: "Фото на документы",
    price: "130",
    desc: [
      "Соответствие всем стандартам",
      "Высокое качество снимков",
      "Быстрая обработка",
      "Удобное расположение ателье",
    ],
  },
];

export const OffersList = () => {
  return (
    <div className="grid grid-cols-3 gap-[100px]">
      {listOffers.map((item) => (
        <div
          key={item.id}
          className={
            item.id === 1
              ? "h-[630px]  flex flex-col py-[55px] pl-[50px] pr-[85px] gap-[10px] justify-between bg-[#C3BE10] rounded-[30px] text-[#000] relative after:content-[''] after:w-[100%] after:h-[1px] after:absolute after:top-[115px] after:left-0 after:bg-[#000] after:bg-opacity-[0.18]"
              : "h-[630px]  flex flex-col py-[55px] pl-[50px] pr-[85px] gap-[10px] justify-between border rounded-[30px] border-[#C3BE10] bg-[#fff] bg-opacity-[0.04] text-[#fff] relative after:content-[''] after:w-[100%] after:h-[1px] after:absolute after:top-[115px] after:left-0 after:bg-[#DEF3FF] after:bg-opacity-[0.18]"
          }
        >
          <h2 className="font-medium text-[24px]">{item.title}</h2>
          <h1
            className={
              item.id === 1
                ? "font-medium text-[17px] text-[#fff]"
                : "font-medium text-[17px] text-[#C3BE10]"
            }
          >
            от <strong className="font-[500] text-[62px]">₽{item.price}</strong>
            /за печать
          </h1>
          <div className="flex flex-col gap-[26px]">
            {item.desc.map((items, i) => (
              <div key={i} className="flex flex-row items-center gap-[12px]">
                <div
                  className={
                    item.id === 1
                      ? "h-[29px] w-[29px] flex justify-center items-center text-[#C3BE10] rounded-[50%] p-[3px] bg-[#000]"
                      : "h-[29px] w-[29px] flex justify-center items-center text-[#000]  rounded-[50%] p-[3px] bg-[#C3BE10]"
                  }
                >
                  <Check size={20} />
                </div>
                <p className="font-medium text-[16px]">{items}</p>
              </div>
            ))}
          </div>
          <button
            className={
              item.id === 1
                ? "w-[220px] text-[#fff] rounded-[60px] px-[59px] py-[17px] border-[2px] border-[#000] border-opacity-[0.5] "
                : "w-[220px] text-[#fff] rounded-[60px] px-[59px] py-[17px] border-[2px] border-[#C3BE10] "
            }
          >
            Подробнее
          </button>
        </div>
      ))}
    </div>
  );
};
