import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

