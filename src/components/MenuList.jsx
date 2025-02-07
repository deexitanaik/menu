import React, { useState } from "react";
import MenuCard from "./MenuCard";

const menuItems = [
  { id: 1, title: "Biscuit Mama with Susu", price: 60000, available: 21, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Krosang Thats It", price: 78000, available: 19, image: "https://via.placeholder.com/150", countable: true },
  { id: 3, title: "Strawberry Float", price: 45000, available: 56, image: "https://via.placeholder.com/150" },
  { id: 4, title: "Healthy Kids Meal", price: 83000, available: 16, image: "https://via.placeholder.com/150", countable: true },
  { id: 5, title: "Mangoo Cereal Milk", price: 95000, available: 18, image: "https://via.placeholder.com/150", countable: true },
  { id: 6, title: "Smoothie Brown Berry", price: 95000, available: 18, image: "https://via.placeholder.com/150" },
  { id: 7, title: "Rainbow Cupcake", price: 95000, available: 11, image: "https://via.placeholder.com/150", countable: true },
  { id: 8, title: "Mie Gocengan Spicy", price: 95000, available: 8, image: "https://via.placeholder.com/150" },
];

const MenuList = () => {
  const [counts, setCounts] = useState({});

  const handleIncrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Explore Our Best Menu</h2>
      <div className="grid grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            available={item.available}
            count={item.countable ? counts[item.id] : undefined}
            onIncrement={() => handleIncrement(item.id)}
            onDecrement={() => handleDecrement(item.id)}
            onOrder={() => alert(`Ordered ${item.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
