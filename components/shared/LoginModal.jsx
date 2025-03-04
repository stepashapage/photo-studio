"use client";

import { SquareX } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Убедитесь, что путь правильный

const LoginModal = ({ isOpen, onClose, onRegisterClick }) => {
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });

  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginClick = async () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Пожалуйста, введите ваш email.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Пожалуйста, введите ваш пароль.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      onClose();
    } catch (error) {
      setErrors({ ...errors, general: "Ошибка при входе: " + error.message });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClickOutside}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
      >
        <div
          style={{
            height: errors.name || errors.email || errors.password ? 650 : 590,
          }}
          className="relative flex flex-col items-center gap-[30px] px-[55px] py-[60px] w-[590px] h-[590px] rounded-[20px] bg-[#1A1717] shadow-[0_0_80px_0_rgba(237,188,90,0.3)]"
        >
          <h2 className="text-[28px] tracking-[0.07em] font-bold text-[#fff]">
            Вход
          </h2>
          <div className="flex flex-col w-full gap-[12px]">
            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ваш@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="flex flex-col w-full gap-[12px]">
            <label className="text-white">Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="Введите ваш пароль"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="custom-checkbox">
            <input type="checkbox" id="remember" className="hidden peer" />
            <label
              htmlFor="remember"
              className="flex items-center gap-2 text-white cursor-pointer"
            >
              <span className="w-[24px] h-[24px] border-2 border-white bg-transparent rounded-[4px] inline-block peer-checked:bg-black"></span>
              Запомнить меня на этом устройстве
            </label>
          </div>

          <button
            onClick={handleLoginClick}
            className="w-full py-[16px] bg-[#EDBC5A] text-white rounded-[10px]"
          >
            Войти
          </button>
          {errors.general && <p className="text-red-500">{errors.general}</p>}
          <button
            onClick={onClose}
            className="p-2 bg-[#EDBC5A] absolute top-4 right-4 text-white rounded-[10px]"
          >
            <SquareX size={25} />
          </button>
          <p>
            Нет аккаунта?{" "}
            <strong
              className="font-regular cursor-pointer underline"
              onClick={onRegisterClick}
            >
              Зарегистрироваться
            </strong>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
