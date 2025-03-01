"use client";

import { SquareX } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const RegisterModal = ({
  isOpen,
  onClose,
  onRegister,
  formData,
  handleChange,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-blur-[20px]  fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 
   "
      >
        <div className="relative flex flex-col items-center gap-[30px] px-[55px] py-[60px] w-[590px] h-[730px] rounded-[20px] bg-[#1A1717] shadow-[0_0_80px_0_rgba(237,188,90,0.3)]">
          <h2 className="text-[28px] tracking-[0.07em] font-bold text-[#fff] ">
            Регистрация
          </h2>
          <div className="flex flex-col w-full gap-[12px]">
            <label className="text-white">ФИО</label>
            <input
              type="text"
              name="phone"
              placeholder="Введите ваше имя"
              value={formData.phone}
              onChange={handleChange}
              className=" w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
            />
          </div>
          <div className="flex flex-col w-full gap-[12px]">
            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ваш@email.com"
              value={formData.email}
              onChange={handleChange}
              className=" w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
            />
          </div>
          <div className="flex flex-col w-full gap-[12px]">
            <label className="text-white">Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="Введите ваш пароль"
              value={formData.password}
              onChange={handleChange}
              className=" w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
            />
          </div>

          <button
            onClick={onRegister}
            className="w-full py-[16px] bg-[#EDBC5A] text-white rounded-[10px]"
          >
            Создать аккаунт
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-[#EDBC5A] absolute top-4 right-4 text-white rounded-[10px]"
          >
            <SquareX size={25} />
          </button>
          <p>
            Уже есть аккаунт?{" "}
            <strong className="" onClick={() => onClose(false, true)}>
              Войти
            </strong>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RegisterModal;
