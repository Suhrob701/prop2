import React from 'react';
import ProductCard from './ProductCard';
import shoeImg from '../assets/shoe.png';

const productlist = [
  {
    title: 'NIKE AIR FORCE 1 ‘07 (white/black)',
    price: "$89.99",
    description: "I lost left shoe, don’t need this one anymore. Please buy it.",
    imgSrc: shoeImg,
    bgColor: "#CBCBCB",
    btnColor: "#727272",
  },
  {
    title: 'NIKE AIR FORCE 1 ‘07 (white/black)',
    price: "$89.99",
    description: "I lost left shoe, don’t need this one anymore. Please buy it.",
    imgSrc: shoeImg,
    bgColor: "#5CA7FF",
    btnColor: "#FFC700",
  },
  {
    title: 'NIKE AIR FORCE 1 ‘07 (white/black)',
    price: "$89.99",
    description: "I lost left shoe, don’t need this one anymore. Please buy it.",
    imgSrc: shoeImg,
    bgColor: "#D083FF",
    btnColor: "#00FFB2",
  },
    {
    title: 'NIKE AIR FORCE 1 ‘07 (white/black)',
    price: "$89.99",
    description: "I lost left shoe, don’t need this one anymore. Please buy it.",
    imgSrc: shoeImg,
    bgColor: "#FF99E2",
    btnColor: "#FFF500",
  },
      {
    title: 'NIKE AIR FORCE 1 ‘07 (white/black)',
    price: "$89.99",
    description: "I lost left shoe, don’t need this one anymore. Please buy it.",
    imgSrc: shoeImg,
    bgColor: "#C5C1C7",
    btnColor: "#00FFB2",
  },
        {
    title: 'NIKE AIR FORCE 1 ‘07 (white/black)',
    price: "$89.99",
    description: "I lost left shoe, don’t need this one anymore. Please buy it.",
    imgSrc: shoeImg,
    bgColor: "#5CFF62",
    btnColor: "#FFC700",
  },
]

const Products = () => {
  return(
      <div className='w-[1400px] p-8 bg-gradient-to-br from-[#2A5AF7] to-[#AB229B] mx-auto'>
      <h1 className='text-white text-3xl font-bold mb-8 text-center'>Products</h1>
      <div className='flex flex-wrap gap-15 ml-10'>
        {productlist.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Products;
