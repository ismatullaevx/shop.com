import React from 'react'

const CalculatedDiscount = ({ prise, discount }) => {
  const discountedPrice = prise - (prise * discount / 100);

  return (
    <div className="flex items-center gap-5 mt-[0px]">
      <h1 className="text-[32px] font-bold">${discountedPrice.toFixed(2)}</h1>  
      <s className="text-black/30 text-[32px] font-bold">${prise}</s>
      <button className="text-[#FF3333] text-[16px] font-medium rounded-[62px] bg-[#F0F0F0] px-[14px] py-[6px]">
        -{discount}%
      </button>
    </div>
  );
};
export default CalculatedDiscount
