"use client";
import { ArrowDownRight } from "lucide-react";
import React, { useState } from "react";
import { Collapse } from "@mui/material";

export const list = [
  {
    id: 0,
    number: "01.",
    title: "Печать на холсте",
    desc: "Создаем настоящие произведения искусства из ваших фотографий, печатая их на высококачественном холсте.",
  },
  {
    id: 1,
    number: "02.",
    title: "Фото на документы",
    desc: "Предоставляем услуги по созданию профессиональных фотографий для документов, соответствующих всем стандартам.",
  },
  {
    id: 2,
    number: "03.",
    title: "Печать визиток",
    desc: "Обеспечиваем печать визитных карточек высокого качества, которые помогут вам создать профессиональный имидж.",
  },
  {
    id: 3,
    number: "04.",
    title: "Сувениры",
    desc: "Создаем уникальные сувениры с вашими фотографиями, такие как кружки и пазлы, которые станут отличным подарком.",
  },
];

export const MomentsList = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-[30px] w-full pb-[100px]">
      {list.map((item) => (
        <div key={item.id} className="relative">
          <div
            className={`flex flex-row gap-[30px] justify-between items-center relative transition-all duration-300 cursor-pointer ${
              expanded === item.id ? "mb-[20px]" : "mb-[30px]"
            }`}
            onClick={() => handleExpandClick(item.id)}
          >
            <div className="flex gap-[30px]">
              <h1
                style={{
                  WebkitTextStroke: "0.5px #fff",
                  color: "transparent",
                }}
                className="font-regular text-[28px] leading-[100%]"
              >
                {item.number}
              </h1>
              <h1 className="font-regular text-[28px] leading-[100%]">
                {item.title}
              </h1>
            </div>
            <button className="bg-[#333333] flex items-center justify-center p-1 rounded-full w-[30px] h-[30px] transition-transform duration-300">
              <ArrowDownRight
                size={20}
                color="#fff"
                className={`transition-transform duration-300 ${
                  expanded === item.id ? "rotate-45" : ""
                }`}
              />
            </button>
          </div>
          <div
            className={`absolute bottom-[0px] w-full h-[1px] bg-[#fff] bg-opacity-[0.2] transition-all duration-300 ${
              expanded === item.id ? "bottom-[-25px]" : ""
            }`}
          ></div>
          <Collapse in={expanded === item.id} timeout="auto" unmountOnExit>
            <p className="font-light text-[18px] text-white my-4 ml-4">
              {item.desc}
            </p>
          </Collapse>
        </div>
      ))}
    </div>
  );
};
