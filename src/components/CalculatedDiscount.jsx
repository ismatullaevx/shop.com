import React from 'react'

const CalculatedDiscount = ({ price, discount }) => {
  const discountedPrice = price - (price * discount / 100);

  return (
    <div className="flex flex-row  items-center gap-2 lg:gap-5 mt-[0px]">
      <h1 className="text-[16px] lg:text-[22px] font-bold">${discountedPrice.toFixed(2)}</h1>
      <s className="text-black/30 text-[16px] lg:text-[22px] font-bold">${price}</s>
      <button className="text-[#FF3333] text-[14px] font-medium rounded-[62px] bg-[#F0F0F0] px-[14px] py-[6px]">
        -{discount}%
      </button>
    </div>
  );
};
export default CalculatedDiscount
