"use client";

import React, { useState } from "react";
import { MapLocal } from "../../..//components/shared/mapLocal";
import { motion } from "framer-motion";
import Link from "next/link";
import { Description } from "../../../components/ui/desc";
import {
  Phone,
  Mail,
  MessageCircle,
  PersonStanding,
  PersonStandingIcon,
  UserRound,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    setTimeout(() => alert("Сообщение отправлено"), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_56w67dc",
        "template_0latvhf",
        formData,
        "xITjPkFxoknV1zuNn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsVisible(false); // Hide the form after submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <main className="max-w-[1600px] mx-auto px-[20px] z-[1] pt-[60px]">
      <section className="relative w-full flex gap-[100px] items-center relative justify-around">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-[115px] w-[600px] relative"
        >
          <div className="flex flex-col gap-[5px]">
            <h2 className="font-[100] text-[16px] leading-[29px] text-[#EDBC5A] tracking-[3px]">
              НАШИ КОНТАКТЫ
            </h2>
            <h1 className="font-regular text-[50px] leading-[auto] w-[80%]">
              Готовы к работе
            </h1>
          </div>

          <div className="grid flex gap-[75px] w-[800px]">
            <div
              className="flex flex-col gap-[15px] relative w-[340px]
                after:absolute after:bottom-[-40px] after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#fff]"
            >
              <h1 className="font-regular text-[28px] leading-[auto]">
                Местонахождение
              </h1>
              <div className="flex flex-col gap-[15px]">
                <Description
                  className="text-[16px] leading-[29px] font-regular opacity-60"
                  text="г. Астрахань, Военный городок, Трусовский район, Ленинский переулок, 72а"
                />
                <Description
                  className="text-[16px] leading-[29px] font-regular opacity-60"
                  text="Телефон: +7 960 851 60 47"
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

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-[30px] w-[856px] h-[789px] p-[80px] bg-[#1A1717] rounded-[20px] shadow-[0_0_80px_0_rgba(237,188,90,0.3)] relative"
        >
          <h1
            className="font-[900] text-[38px] leading-[auto] text-white tracking-[2px] relative
        after:content-[''] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#EDBC5A] after:via-[#C3BE1023] after:to-[transparent] after:absolute after:left-0 after:bottom-[-30px] after:rounded-full"
          >
            Свяжитесь с нами
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[66px] pt-[75px]">
              <div className="flex gap-[20px]">
                <div className="flex items-center gap-[10px] w-full">
                  <UserRound color="#fff" />
                  <input
                    type="text"
                    name="name"
                    placeholder="ФИО"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex-1 p-[10px] bg-transparent border-b-[1px] border-[#fff] text-white w-full"
                  />
                </div>
                <div className="flex items-center gap-[10px] w-full">
                  <Mail color="#fff" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex-1 p-[10px] bg-transparent border-b-[1px] border-[#fff] text-white w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[10px]">
                <Phone color="#fff" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 p-[10px] bg-transparent border-b-[1px] border-[#fff] text-white"
                />
              </div>
              <div className="flex items-start gap-[10px] ">
                <MessageCircle color="#fff" className="mt-[10px]" />
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-1 p-[10px] bg-transparent border-b-[1px] border-[#fff] text-white h-[135px]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-[50px] p-[15px] bg-[#EDBC5A] text-[#1A1717] font-regular text-[20px] rounded-[10px] w-full"
              onClick={handleButtonClick}
            >
              Отправить сообщение
            </button>
          </form>
        </motion.div>
      </section>

      <section className="relative w-full pt-[115px]">
        <MapLocal />
      </section>
    </main>
  );
};

export default Contact;
