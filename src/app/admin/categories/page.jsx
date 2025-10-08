
"use client";

import { useState, useEffect } from 'react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const newCategory = await res.json();
    setCategories([...categories, newCategory]);
    setName('');
  };

  const handleDelete = async (id) => {
    await fetch(`/api/categories/${id}`, { method: 'DELETE' });
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Categories</h2>
      <form onSubmit={handleCreate} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New category name"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Create</button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center mb-2 p-2 border">
            {category.name}
            <button onClick={() => handleDelete(category.id)} className="bg-red-500 text-white p-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
