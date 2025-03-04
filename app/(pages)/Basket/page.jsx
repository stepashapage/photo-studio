"use client";

import React, { useState } from "react";
import useCartStore from "../../../store/cartStore";
import CartItems from "../../../components/shared/CartItems";
import PersonalInfo from "../../../components/shared/PersonalInfo";
import CheckoutModal from "../../../components/shared/CheckoutModal";
import CheckoutSummary from "../../../components/shared/CheckoutSummary";

const Basket = () => {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    secName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Пожалуйста, введите имя.";
    if (!formData.secName) newErrors.secName = "Пожалуйста, введите фамилию.";
    if (!formData.email) newErrors.email = "Пожалуйста, введите email.";
    if (!formData.phone) newErrors.phone = "Пожалуйста, введите телефон.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      setShowModal(true);
    }
  };

  return (
    <div className="relative max-w-[1600px] mx-auto px-[20px] z-[1] pt-[50px] flex flex-col gap-[45px]">
      <h2 className="font-regular text-[36px]">Оформление заказа</h2>
      <div className="flex justify-between gap-[95px]">
        <div className="flex flex-col w-full gap-[45px]">
          <CartItems items={items} clearCart={clearCart} />
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        </div>

        <CheckoutSummary
          getTotalPrice={getTotalPrice}
          onCheckout={handleCheckout}
        />
      </div>

      {showModal && (
        <CheckoutModal
          setShowModal={setShowModal}
          formData={formData}
          getTotalPrice={getTotalPrice}
          items={items}
        />
      )}
    </div>
  );
};

export default Basket;
