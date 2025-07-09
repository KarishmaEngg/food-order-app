import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Popular from './pages/Popular';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
