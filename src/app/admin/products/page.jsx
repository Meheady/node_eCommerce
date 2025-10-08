
"use client";

import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price: parseFloat(price), categoryId: parseInt(categoryId) }),
    });
    const newProduct = await res.json();
    setProducts([...products, newProduct]);
    setName('');
    setDescription('');
    setPrice('');
    setCategoryId('');
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <form onSubmit={handleCreate} className="mb-4 p-4 border">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2" />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2" />
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="border p-2" />
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="border p-2">
            <option value="">Select Category</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Create</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center mb-2 p-2 border">
            <div>
              <p className="font-bold">{product.name}</p>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
            <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white p-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
