import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-8 flex flex-col md:flex-row gap-8">
      <img src={product.image} alt={product.name} className="w-full md:w-1/3 rounded shadow" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="mt-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600 mt-4">₹{product.price}</p>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded">Add to Cart</button>
      </div>
    </div>
  );
}
