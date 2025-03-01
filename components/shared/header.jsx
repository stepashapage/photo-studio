"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firebase"; // Убедитесь, что путь правильный
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import ProfileModal from "./ProfileModal";

const Header = ({ className }) => {
  const [user, setUser] = useState(null);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await addDoc(collection(db, "users"), {
        email: formData.email,
        phone: formData.phone,
        registeredAt: serverTimestamp(),
      });
      setRegisterModalOpen(false);
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setLoginModalOpen(false);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setProfileModalOpen(false);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <header className="h-[80px] w-full flex items-center justify-between gap-[15px] pt-[36px] max-w-[1600px] mx-auto px-[20px]">
      <Link href="/" className="flex items-center gap-[10px]">
        <Image
          className="cursor-pointer max-lg:w-[40px] max-lg:h-[40px]"
          src="/logo.svg"
          alt="logo"
          width={200}
          height={40}
        />
      </Link>
      <menu className="flex gap-[--gap] items-center text-[16px] max-lg:text-[14px] font-regular leading-[18px]">
        <Link href="/About">О нас</Link>
        <Link href="/">Каталог</Link>
        <Link href="/Portfolio">Портфолио</Link>
        <Link href="/Contact">Контакты</Link>
      </menu>
      <div className="flex gap-[40px] items-center justify-center">
        <ShoppingCart size={35} />
        <User
          className="cursor-pointer"
          size={35}
          onClick={() => {
            if (user) {
              setProfileModalOpen(true);
            } else {
              setRegisterModalOpen(true);
            }
          }}
        />
      </div>

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onRegister={handleRegister}
        formData={formData}
        handleChange={handleChange}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
        formData={formData}
        handleChange={handleChange}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={user}
        onLogout={handleLogout}
      />
    </header>
  );
};

export default Header;
