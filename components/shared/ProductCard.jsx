import Image from "next/image";
import React from "react";
import useCartStore from "../../store/cartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="relative overflow-hidden z-[1] flex flex-col items-center justify-between gap-2 rounded-[35px] bg-[#2B2626] w-[340px] h-[340px]">
      <div className="py-[16px] px-[25px] w-full">
        <h3 className="w-full text-center text-[#2B2B2B] rounded-[15px] py-[6px] px-[10px] bg-[#EDBC5A] font-regular text-[16px]">
          {product.name}
        </h3>
      </div>
      <div className="z-[3] w-full h-[60px] bg-[#EDBC5A] flex items-center justify-center">
        <button
          className="text-center text-[#2B2B2B] rounded-[10px] py-[7px] px-[28px] bg-[#FFF1E5] font-regular text-[14px]"
          onClick={handleAddToCart}
        >
          Купить за {product.price} ₽
        </button>
      </div>
      <Image
        src={product.img}
        alt={product.name}
        width={210}
        height={210}
        className="absolute z-[3] top-[67px] right-[32px] w-[210px] h-[210px] object-cover"
      />
      <Image
        src="/VectorCategory3.svg"
        alt="photo"
        width={85}
        height={23}
        className="absolute top-[83px] left-[9px] w-[23px] h-[85px] z-[2]"
      />
      <Image
        src="/VectorCategory4.svg"
        alt="photo"
        width={85}
        height={23}
        className="absolute top-[72px] right-[9px] w-[37px] h-[142px] z-[2]"
      />
      <Image
        src="/VectorCategory1.svg"
        alt="photo"
        width={210}
        height={210}
        className="absolute top-[10px] right-[0] w-full h-full object-cover z-[2]"
      />
      <Image
        src="/VectorCategory2.svg"
        alt="photo"
        width={210}
        height={210}
        className="absolute bottom-[-155px] right-[0px] w-full h-full object-cover z-[2]"
      />
    </div>
  );
};

export default ProductCard;
