"use client";

import { SquareX } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Убедитесь, что путь правильный
import Image from "next/image";

import { Store } from "lucide-react";

const ProfileModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      alert("Ошибка при выходе из аккаунта: " + error.message);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClickOutside}
        className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-90 z-50"
      >
        <div
          className="relative flex flex-col items-center justify-between gap-[30px] px-[20px] py-[30px] w-[400px] h-full bg-[#1A1717] shadow-[0_0_80px_0_rgba(237,188,90,0.3)]"
          style={{ left: 0 }}
        >
          <div className="flex flex-col gap-[25px]">
            <h2 className="text-[28px] font-regular text-[#fff] w-full text-start">
              Ваш профиль
            </h2>

            <div className="flex items-center gap-[10px]">
              <Image
                src="/avatar.svg"
                alt="photo"
                width={125}
                height={125}
                className="w-[125px] h-[125px] rounded-full"
              />
              <div className="text-white text-[20px] font-regular">
                Имя профиля:{" "}
                <span className="opacity-50 font-[500]">
                  {user.displayName || "Не указано"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] py-[10px]">
              <div className="text-white">
                Email:{" "}
                <span className="opacity-50 font-[500]">{user.email}</span>
              </div>
              <div className="text-white">
                Последний вход был сделан:{" "}
                <span className="opacity-50 font-[500]">
                  {user.metadata.lastSignInTime
                    ? new Date(user.metadata.lastSignInTime).toLocaleString()
                    : "Неизвестно"}
                </span>
              </div>
            </div>

            <div className="flex flex-col  gap-[10px] w-full p-[20px] bg-[#1A1717] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.3)] text-white">
              <h1 className="font-bold text-[18px] tracking-[0.05em] leading-[100%] text-center">
                Последние покупки:
              </h1>
              <div className="flex flex-col items-center gap-[10px] text-center">
                <Store size={64} strokeWidth={1} color="#fff" />
                <p className="text-[14px] leading-[100%] opacity-70">
                  Пока у вас нет покупок
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full py-[16px] bg-[#EDBC5A] text-white rounded-[10px]"
          >
            Выйти из аккаунта
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-[#EDBC5A] absolute top-[30px] right-[20px] text-white rounded-[10px]"
          >
            <SquareX size={25} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileModal;
