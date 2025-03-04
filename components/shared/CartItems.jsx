import React from "react";
import useCartStore from "../../store/cartStore";
import { ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Store } from "lucide-react";

const CartItems = ({ items, clearCart }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="relative flex flex-col gap-[58px] p-[35px] pb-[55px] w-full min-h-[340px] rounded-[30px] bg-[#1A1717] shadow-[0_0_30px_0_rgba(237,188,90,0.3)] after:absolute after:top-[88px] after:left-0 after:w-[100%] after:h-[1px] after:bg-[#fff]">
      <div className="flex items-center justify-between gap-[10px] cursor-pointer">
        <h3 className="text-[#fff] text-[24px] font-bold">1. Корзина</h3>
        <div className="flex items-center gap-[8px]" onClick={clearCart}>
          <ShoppingBag size={22} color="#EDBC5A" />
          <p className="text-[#A1A1A1] text-[16px]">Очистить корзину</p>
        </div>
      </div>

      <div className="flex flex-col gap-[40px]">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center relative after:absolute after:bottom-[-20px] after:left-0 after:w-[100%] after:h-[1px] after:bg-[#fff]"
            >
              <div className="flex items-center gap-[20px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={65}
                  height={65}
                  className="w-[65px] h-[65px] mr-4 rounded-lg"
                />

                <div className="flex flex-col gap-[1px]">
                  <p className="text-[16px] font-bold">{item.category}</p>
                  <p className="text-[14px] text-[#A1A1A1] font-regular">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[80px]">
                <p className="text-[16px] font-bold">{item.price} ₽</p>
                <div className="flex items-center gap-[20px]">
                  <div className="flex items-center gap-[10px]">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{
                        color: item.quantity === 1 ? "#CECECE" : "#EDBC5A",
                        border:
                          item.quantity === 1
                            ? "1px solid #fff"
                            : "1px solid #EDBC5A",
                        cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                      }}
                      className="h-[30px] w-[30px] bg-[#fff] rounded-[10px] flex justify-center items-center"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="text-[16px] font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="h-[30px] w-[30px] bg-[#fff] text-[#EDBC5A] border border-[#EDBC5A] rounded-[10px] flex justify-center items-center"
                    >
                      +
                    </button>
                  </div>
                  <X
                    size={20}
                    color="#C0C0C0"
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-[10px] w-full p-[20px] text-white">
            <h1 className="font-bold text-[18px] tracking-[0.05em] leading-[100%] text-center">
              Ваша корзина пуста:
            </h1>
            <div className="flex flex-col items-center gap-[10px] text-center">
              <Store size={64} strokeWidth={1} color="#fff" />
              <p className="text-[14px] leading-[100%] opacity-70">
                Перейдите в{" "}
                <Link className="text-[#EDBC5A] underline" href="/Catalog">
                  каталог
                </Link>
                , чтобы добавить товары в корзину
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
