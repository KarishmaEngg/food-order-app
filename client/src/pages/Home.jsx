import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
            Delicious Food Delivered to You
          </h1>
          <p className="text-lg md:text-xl text-white text-center mb-6 max-w-xl">
            Fresh, hot, and tasty food delivered at your doorstep in minutes.
          </p>
          <Link
            to="/menu"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
