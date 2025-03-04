import React from "react";

const CheckoutSummary = ({ getTotalPrice, onCheckout }) => {
  return (
    <div className="relative flex flex-col gap-[55px] p-[35px] pb-[55px] w-[650px] h-[405px] rounded-[30px] bg-[#1A1717] shadow-[0_0_30px_0_rgba(237,188,90,0.3)] after:absolute after:top-[140px] after:left-0 after:w-[100%] after:h-[1px] after:bg-[#fff] before:absolute before:bottom-[130px] before:left-0 before:w-[100%] before:h-[1px] before:bg-[#fff]">
      <div className="flex flex-col gap-[0px]">
        <h3 className="text-[#fff] text-[20px] font-regular">Итого:</h3>
        <p className="text-[#fff] text-[34px] font-bold">{getTotalPrice()} ₽</p>
      </div>

      <div className="flex flex-col gap-[13px]">
        <div className="flex justify-between items-end gap-[5px]">
          <p>Стоимость товаров:</p>
          <hr className="border-dotted border-gray-500 w-[35%] mb-[5px]" />
          <p className="text-[#fff] text-[18px] font-bold">
            {getTotalPrice()} ₽
          </p>
        </div>
        <div className="flex justify-between items-end gap-[5px]">
          <p>Налоги:</p>
          <hr className="border-dotted border-gray-500 w-[70%] mb-[5px]" />
          <p className="text-[#fff] text-[18px] font-bold">0 ₽</p>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="text-[#fff] text-[18px] font-bold bg-[#EDBC5A] py-[17px] rounded-[15px] mt-[20px]"
      >
        Перейти к оплате
      </button>
    </div>
  );
};

export default CheckoutSummary;
