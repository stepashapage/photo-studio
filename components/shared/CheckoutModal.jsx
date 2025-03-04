import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCartStore from "../../store/cartStore";
import { MonitorUp } from "lucide-react";

const CheckoutModal = ({ setShowModal, formData, getTotalPrice, items }) => {
  const clearCart = useCartStore((state) => state.clearCart);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const proceedToWhatsApp = () => {
    const message = `
**Заказ с сайта**

Здравствуйте! Хочу приобрести следующие товары:

**Список товаров:**
${items.map((item) => `- ${item.name}`).join("\n")}

**Общая стоимость:** ${getTotalPrice()} ₽

**Контактная информация:**
- **Фамилия Имя:** ${formData.secName} ${formData.name}
- **Телефон:** ${formData.phone}
- **Email:** ${formData.email}

**Для связи:** WhatsApp

Спасибо! 😊
    `;
    const whatsappURL = `https://wa.me/79627521533?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    // Очистка корзины после перехода в WhatsApp
    clearCart();
    setShowModal(false);
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
        <div className="relative flex flex-col items-center gap-[30px] px-[55px] py-[60px] w-[590px] rounded-[20px] bg-[#1A1717] shadow-[0_0_80px_0_rgba(237,188,90,0.3)]">
          <h2 className="text-[28px] tracking-[0.07em] font-bold text-[#fff]">
            Подтверждение заказа
          </h2>
          <MonitorUp size={150} color="#EDBC5A" />
          <p className="text-white text-center">
            Для дальнейшей оплаты вы будете перенаправлены в WhatsApp.
          </p>
          <button
            onClick={proceedToWhatsApp}
            className="w-full py-[16px] bg-[#EDBC5A] text-white rounded-[10px]"
          >
            Продолжить
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
