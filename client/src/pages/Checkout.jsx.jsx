import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../api/axios"; // ✅ Ensure correct axios import

const Checkout = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Cash on Delivery",
    upiId: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 UPI validation
    if (formData.paymentMethod === "UPI" && formData.upiId === "") {
      alert("Please enter your UPI ID");
      return;
    }

    // 🔴 Card validation
    if (formData.paymentMethod === "Credit/Debit Card") {
      if (
        formData.cardNumber === "" ||
        formData.expiryDate === "" ||
        formData.cvv === ""
      ) {
        alert("Please enter all card details");
        return;
      }
    }

    try {
      const response = await axios.post("/orders/create", {
        ...formData,
        totalAmount: totalAmount,
      });

      if (response.status === 201) {
        console.log("✅ Order response:", response.data);
        alert("Order placed and saved successfully!");
        // Optionally redirect to success page here
      }
    } catch (error) {
      console.error("❌ Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <h2 className="text-xl mb-4">Total Amount: ₹{totalAmount}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit/Debit Card</option>
          </select>
        </div>

        {/* Conditional UPI field */}
        {formData.paymentMethod === "UPI" && (
          <div>
            <label className="block mb-1">UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        )}

        {/* Conditional Card fields */}
        {formData.paymentMethod === "Credit/Debit Card" && (
          <>
            <div>
              <label className="block mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
