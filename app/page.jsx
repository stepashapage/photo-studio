import React from "react";
import CircleBackground from "../components/ui/circleBackground";
import { Description } from "../components/ui/desc";
import { Title } from "../components/ui/title";
import { AdvantagesList } from "../components/shared/advantages-list";
import { CommentsList } from "../components/shared/comments-list";
import { MomentsList } from "../components/shared/moments-list";
import { OffersList } from "../components/shared/offers-list";
import Image from "next/image";
import { AnimateSection } from "../components/shared/animateSection";

export default function Home() {
  return (
    <main className="max-w-[1600px] mx-auto px-[20px] z-[1] pt-[75px]">
      <section className="relative w-full flex flex-col gap-[250px]">
        <CircleBackground className="right-[-15%] top-[-50px]" />
        <CircleBackground className="left-[-15%] top-[250px]" />

        <AnimateSection />
      </section>
      <section className="relative w-full flex flex-col gap-[100px] pt-[115px]">
        <div className="flex flex-row justify-between items-center gap-[25px]">
          <Title
            text="Наши конкурентные "
            strong="Преимущества"
            className="flex flex-col text-start"
            className1="font-regular text-[75px] leading-[133%]"
            className2="font-regular text-[75px] leading-[133%]"
          />
          <Image
            src="/imageAbout.svg"
            alt="photo"
            width={670}
            height={340}
            className="w-[670px] h-[340px] object-cover rounded-[38px]"
          ></Image>
        </div>

        <AdvantagesList />
      </section>
      <section className="relative w-full flex flex-col gap-[40px] pt-[115px]">
        <CircleBackground className="right-[-15%] top-[0px]" />
        <div className="flex flex-col w-[950px]">
          <Title
            text="УНИКАЛЬНЫЕ"
            strong="МГНОВЕНИЯ"
            className="flex flex-row items-center gap-[20px] text-start"
            className1="font-regular text-[50px] leading-[133%]"
            className2="font-regular text-[75px] leading-[133%]"
          />
          <Title
            text="ЖЕЛАНИЙ."
            strong="ДЛЯ ВАШИХ"
            className="flex flex-row-reverse items-center gap-[20px] text-start"
            className1="font-regular text-[50px] leading-[133%]"
            className2="font-regular text-[75px] leading-[133%]"
          />
        </div>
        <div className="flex flex-row items-center gap-[160px]">
          <Image
            src="/ImageSvgDetails.svg"
            alt="photo"
            width={670}
            height={340}
            className="w-[510px] h-[520px] object-cover"
          />

          <MomentsList />
        </div>
      </section>
      <section className="relative w-full flex flex-col gap-[55px] pt-[115px]">
        <div className="flex justify-between items-center gap-[25px]">
          <Title
            text="ПОПУЛЯРНЫЕ"
            strong="ПРЕДЛОЖЕНИЯ"
            className="flex flex-col text-start"
            className1="font-regular text-[50px] leading-[133%]"
            className2="font-regular text-[75px] leading-[133%]"
          />
          <Description
            className="w-[700px]"
            text="Мы предлагаем широкий спектр услуг, чтобы удовлетворить любые ваши потребности и запечатлеть самые важные моменты вашей жизни."
          />
        </div>

        <OffersList />
      </section>
      <section className="relative w-full flex flex-col gap-[60px] pt-[115px]">
        <CircleBackground className="left-[-20%] top-[-20%]" />
        <h2 className="font-bold text-[38px] leading-[133%]">
          Последние комментарии
        </h2>
        <div className="flex flex-row gap-[25px] justify-between items-center">
          <CommentsList />

          <Image
            src="/commentImage.svg"
            alt="photo"
            width={460}
            height={460}
            className="w-[460px] h-[460px] object-cover rounded-[38px]"
          />
        </div>
      </section>
    </main>
  );
}
