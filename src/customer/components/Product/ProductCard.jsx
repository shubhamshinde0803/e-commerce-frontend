import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart ">
        <p className="font-bold opacity-60">{product.brand}</p>
        <p>{product.title}</p>

        <div className="flex item-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="opacity-50">
            MRP <span className="line-through">₹{product.price}</span>
          </p>
          <p className="text-green-600">({product.discountPersent}% off)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
