import React from "react";
import Image from "next/image";
import { Description } from "../ui/desc";

export const listComments = [
  {
    id: 0,
    name: "Ev Gor",
    text: "Отличное качество фотографий, поэтому только сюда!!!",
    date: "Октябрь - 11 2022",
    avatar: "/avatar1.svg",
  },
  {
    id: 1,
    name: "Наталья Бакаева",
    text: "Всегда выручают, девушка всегда приветливая и подсказывает если возникают вопросы 👍",
    date: "Январь - 10 2023",
    avatar: "/avatar2.svg",
  },
];

export const CommentsList = () => {
  return (
    <div className="flex flex-col gap-[100px] w-full">
      {listComments.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-[37px] h-[160px] after:content-[''] relative
          after:absolute after:bottom-[-36px] after:w-[100%] after:h-[1px] after:bg-[#fff]"
        >
          <Image
            src={item.avatar}
            alt={item.name}
            width={120}
            height={120}
            className="w-120 h-120 rounded-full"
          />
          <div className="flex flex-col gap-[25px] justify-start">
            <div className="flex flex-row gap-[35px] items-center">
              <h1 className="font-regular text-[28px] leading-[100%]">
                {item.name}
              </h1>
              <Description
                className="font-regular text-[16px] leading-[100%]"
                text={item.date}
              />
            </div>
            <Description
              className="font-regular text-[16px] leading-[100%]"
              text={item.text}
            />
          </div>
          <Image
            src="/SuperToroid-Black-Matte.svg"
            alt="SuperToroid"
            width={50}
            height={50}
            className="w-[50px] h-[50px] absolute bottom-[-15px] right-[15px]"
          />
        </div>
      ))}
    </div>
  );
};
