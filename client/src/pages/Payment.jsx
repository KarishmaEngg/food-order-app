import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { totalAmount } = location.state || {};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      <p>Total amount to pay: ₹{totalAmount}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Pay Now</button>
    </div>
  );
};

export default Payment;
