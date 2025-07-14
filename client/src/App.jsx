import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Popular from "./pages/Popular";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import SignIn from "./pages/SignIN";
import SignUp from "./pages/SignUp";
import Feedback from "./pages/Feedback";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home feedbacks={feedbacks} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feedback" element={<Feedback onAddFeedback={addFeedback} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
