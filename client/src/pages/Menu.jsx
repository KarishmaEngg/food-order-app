import React, { useState, useContext } from "react";
import menuItems from "../data/menuItems";
import { CartContext } from "../context/CartContext";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useContext(CartContext);

  // Extract all unique categories from your menuItems
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Menu</h1>

      {/* Categories filter buttons */}
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`m-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="border rounded shadow p-4 flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-green-600 mb-2">₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-green-600 text-white px-4 py-2 rounded"
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
