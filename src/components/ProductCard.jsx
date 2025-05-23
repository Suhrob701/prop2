import React from "react";

const ProductCard = ({title, price, description, imgSrc, bgColor, btnColor}) => {
  return(
    <div className="w-[380px] h-[500px] rounded-2xl p-4 shadow-xl" style={{backgroundColor: bgColor}}>
      <div className="flex justify-end mb-2">
       <button className="text-xl z-[1] mr-[10px]">🤍</button>

      </div>
      <img src={imgSrc} alt="" className="w-full  mb-3 -mt-[40px]"/>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="font-semibold text-lg">{price}</p>
      <p className="text-base text-black font-normal mb-4">{description}</p>
      <button className="w-full rounded-full flex items-center justify-center py-2 font-semibold" style={{backgroundColor: btnColor}}>🛒 Add to cart</button>
    </div>
  );
};

export default ProductCard;

