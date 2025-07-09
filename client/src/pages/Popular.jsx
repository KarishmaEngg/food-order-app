import React from 'react';
import butterChicken from '../assets/popular/butter_chicken.jpg';
import paneerButterMasala from '../assets/popular/Paneer Butter Masala.jpg';
import cheesePizza from '../assets/popular/Cheese Pizza.jpg';
import chickenBiryani from '../assets/popular/chiken biryani.jpg';
import gulabJamun from '../assets/popular/gulab jamun.jpg';
import iceCream from '../assets/popular/ice cream.jpg';
import samosa from '../assets/popular/samosa.jpg';
import dosa from '../assets/popular/dosa.jpg';

const popularItems = [
  { id: 1, name: 'Butter Chicken', price: 349, image: butterChicken },
  { id: 2, name: 'Paneer Butter Masala', price: 299, image: paneerButterMasala },
  { id: 3, name: 'Cheese Pizza', price: 249, image: cheesePizza },
  { id: 4, name: 'Chicken Biryani', price: 299, image: chickenBiryani },
  { id: 5, name: 'Gulab Jamun', price: 79, image: gulabJamun },
  { id: 6, name: 'Ice Cream', price: 99, image: iceCream },
  { id: 7, name: 'Samosa', price: 25, image: samosa },
  { id: 8, name: 'Dosa', price: 150, image: dosa },
];

const Popular = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-green-600 font-bold mb-2">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
