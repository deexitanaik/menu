import React from "react";
import "./menu.css";

const MenuItem = ({ name, price, available, imgSrc }) => {
  return(
    <div className="menu-item">
      <img className="menu-image" src={imgSrc} alt={name} />
      <div className="menu-info">
        <span className="menu-availability">Available: {available}</span>
        <h3 className="menu-title">{name}</h3>
        <p className="menu-price">Rp {price.toLocaleString("id-ID")},00</p>
        <div className="menu-order">
          <button className="order-button">Order</button>
        </div>
      </div>
    </div>



const Menu = () => {
  const menuItems = [
    {
      name: "Biscuit Mama with Susu",
      price: 60000,
      available: 21,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Krosang Thats It",
      price: 78000,
      available: 19,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Strawberry Float",
      price: 45000,
      available: 56,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Healthy Kids Meal",
      price: 83000,
      available: 16,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Mangoo Cereal Milk",
      price: 95000,
      available: 18,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Smoothie Brown Berry",
      price: 95000,
      available: 18,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Rainbow Cupcake",
      price: 95000,
      available: 10,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      name: "Mie Gocengan Spicy",
      price: 95000,
      available: 8,
      imgSrc: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Explore Our Best Menu</h2>
      <div className="menu-categories">
        {["All", "Main Course", "Appetizer", "Dessert", "Side Dishes", "Beverages", "Kids"].map((category, index) => (
          <button key={index} className={`category-button ${index === 0 ? "active" : ""}`}>
            {category}
          </button>
        ))}
        <button className="filter-button">Filter</button>
      </div>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
);
};

















};

export default Menu;
