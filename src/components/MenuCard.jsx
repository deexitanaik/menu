import React from "react";
import "./MenuCard.css";
const MenuCard = ({ image, title, price, available, count, onIncrement, onDecrement, onOrder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-64">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded-lg" />
      <div className="mt-2">
        <p className="text-gray-500 text-sm">Available: {available}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-800 font-bold">Rp {price.toLocaleString("id-ID")},00</p>
        <div className="flex justify-between items-center mt-2">
          {count !== undefined ? (
            <div className="flex items-center">
              <button onClick={onDecrement} className="bg-gray-200 px-2 py-1 rounded">-</button>
              <span className="px-3">{count}</span>
              <button onClick={onIncrement} className="bg-gray-200 px-2 py-1 rounded">+</button>
            </div>
          ) : (
            <button onClick={onOrder} className="bg-black text-white px-4 py-1 rounded">
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
