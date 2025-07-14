import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // ✅ Import Tailwind/global styles here
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
