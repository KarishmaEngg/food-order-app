import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import item1 from "../assets/menu/item1.jpg";
import item2 from "../assets/menu/item2.jpg";
import item3 from "../assets/menu/item3.jpg";
import item4 from "../assets/menu/item4.jpg";
import item5 from "../assets/menu/item5.jpg";
import item6 from "../assets/menu/item6.jpg";
import item7 from "../assets/menu/item7.jpg";
import item8 from "../assets/menu/item8.jpg";
import item9 from "../assets/menu/item9.jpg";
import item10 from "../assets/menu/item10.jpg";
import item11 from "../assets/menu/item11.jpg";
import item12 from "../assets/menu/item12.jpg";
import item13 from "../assets/menu/item13.jpg";
import item14 from "../assets/menu/item14.jpg";
import item15 from "../assets/menu/item15.jpg";

const menuItems = [
  { id: 1, name: "Item 1", price: 150, image: item1 },
  { id: 2, name: "Item 2", price: 200, image: item2 },
  { id: 3, name: "Item 3", price: 180, image: item3 },
  { id: 4, name: "Item 4", price: 220, image: item4 },
  { id: 5, name: "Item 5", price: 170, image: item5 },
  { id: 6, name: "Item 6", price: 250, image: item6 },
  { id: 7, name: "Item 7", price: 190, image: item7 },
  { id: 8, name: "Item 8", price: 230, image: item8 },
  { id: 9, name: "Item 9", price: 210, image: item9 },
  { id: 10, name: "Item 10", price: 240, image: item10 },
  { id: 11, name: "Item 11", price: 260, image: item11 },
  { id: 12, name: "Item 12", price: 175, image: item12 },
  { id: 13, name: "Item 13", price: 225, image: item13 },
  { id: 14, name: "Item 14", price: 205, image: item14 },
  { id: 15, name: "Item 15", price: 235, image: item15 },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
            <p className="text-green-600 font-bold mt-1">₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
