"use client";
import { cn } from "../../lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ProfileModal from "./ProfileModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export const Header = ({ className }) => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
    setIsAccountVisible(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterVisible(true);
    setIsLoginVisible(false);
    setIsAccountVisible(false);
  };

  const handleAccountClick = () => {
    setIsAccountVisible(true);
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserIconClick = () => {
    if (user) {
      handleAccountClick();
    } else {
      setIsRegisterVisible(true);
    }
  };

  return (
    <>
      <header className={cn("z-[11] relative t0 l0 w-full", className)}>
        <div className="h-[80px] w-full flex items-center justify-between gap-[15px] pt-[36px] max-w-[1600px] mx-auto px-[20px]">
          <Link href="/" className="flex items-center gap-[10px]">
            <Image
              className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px]"
              src={"/logo.svg"}
              alt="logo"
              width={200}
              height={40}
            />
          </Link>
          <menu className="flex gap-[--gap] items-center text-[16px] max-lg:text-[14px] font-regular leading-[18px]">
            <Link href="/About">О нас</Link>
            <Link href="/Catalog">Каталог</Link>
            <Link href="/Portfolio">Портфолио</Link>
            <Link href="/Contact">Контакты</Link>
          </menu>
          <div className="flex gap-[40px] items-center justify-center">
            <Link href="/Basket">
              <ShoppingCart size={35} />
            </Link>

            <User
              className="cursor-pointer"
              size={35}
              onClick={handleUserIconClick}
            />
          </div>
        </div>
      </header>
      <LoginModal
        isOpen={isLoginVisible}
        onClose={() => setIsLoginVisible(false)}
        onRegisterClick={handleRegisterClick}
      />
      <RegisterModal
        isOpen={isRegisterVisible}
        onClose={() => setIsRegisterVisible(false)}
        onLoginClick={handleLoginClick}
        formData={formData}
        handleChange={handleChange}
      />
      <ProfileModal
        isOpen={isAccountVisible}
        onClose={() => setIsAccountVisible(false)}
        user={user}
      />
    </>
  );
};

export default Header;
