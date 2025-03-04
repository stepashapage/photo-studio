"use client";

import { SquareX } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase"; // Убедитесь, что путь правильный

const RegisterModal = ({
  isOpen,
  onClose,
  onLoginClick,
  formData,
  handleChange,
}) => {
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRegisterClick = async () => {
    let isValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!formData.name) {
      newErrors.name = "Пожалуйста, введите ваше имя.";
      isValid = false;
    }

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Обновление профиля пользователя с именем
      await updateProfile(user, { displayName: formData.name });

      // alert("Аккаунт успешно создан!");
      onClose();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({
          ...errors,
          general: "Пользователь с такой почтой уже зарегистрирован",
        });
      } else {
        setErrors({
          ...errors,
          general: "Ошибка при создании аккаунта: " + error.message,
        });
      }
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
            height: errors.name || errors.email || errors.password ? 800 : 730,
          }}
          className="relative flex flex-col items-center justify-center gap-[30px] px-[55px] py-[60px] w-[590px] h-[730px] rounded-[20px] bg-[#1A1717] shadow-[0_0_80px_0_rgba(237,188,90,0.3)]"
        >
          <h2 className="text-[28px] tracking-[0.07em] font-bold text-[#fff]">
            Регистрация
          </h2>
          <div className="flex flex-col w-full gap-[12px]">
            <label className="text-white">ФИО</label>
            <input
              type="text"
              name="name"
              placeholder="Введите свое имя"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] gap-[10px] bg-transparent border-[1px] rounded-[8px] border-opacity-[0.1] border-[#fff] text-white"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
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
            {errors.general && <p className="text-red-500">{errors.general}</p>}
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
              <span className="w-[24px] h-[24px] leading-[100%] border-2 border-white bg-transparent rounded-[4px] inline-block peer-checked:bg-black"></span>
              Я согласен с правилами и условиями
            </label>
          </div>

          <button
            onClick={handleRegisterClick}
            className="w-full py-[16px] bg-[#EDBC5A] text-white rounded-[10px]"
          >
            Создать аккаунт
          </button>
          <p>
            Уже есть аккаунт?{" "}
            <strong
              className="font-regular cursor-pointer underline"
              onClick={onLoginClick}
            >
              Войти
            </strong>
          </p>
          <button
            onClick={onClose}
            className="p-2 bg-[#EDBC5A] absolute top-4 right-4 text-white rounded-[10px]"
          >
            <SquareX size={25} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RegisterModal;
