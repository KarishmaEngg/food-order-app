import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
