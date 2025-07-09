import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalAmount: Number,
  status: { type: String, default: "Pending" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
