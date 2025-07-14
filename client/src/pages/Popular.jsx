import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import menuItems from '../data/menuItems';
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  // ✅ Show all items grouped by category
  const categories = Array.from(new Set(menuItems.map((item) => item.category)));

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Items</h1>

      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-green-600 font-bold mb-1">₹{item.price}</p>
                  <p className="text-sm text-gray-500 mb-2">{category}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
