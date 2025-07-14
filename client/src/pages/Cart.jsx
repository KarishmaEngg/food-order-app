import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="border p-2 mb-2 rounded flex justify-between items-center">
              <span>{item.name} - ₹{item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl mt-4">Total: ₹{totalAmount}</h2>
          <Link to="/checkout" state={{ totalAmount }}>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
