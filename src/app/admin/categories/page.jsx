'use client';

import { useState, useEffect } from 'react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/categories/${editingCategory.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editingCategory.name }),
      }
    );
    const updatedCategory = await res.json();
    setCategories(
      categories.map((c) => (c.id === updatedCategory.id ? updatedCategory : c))
    );
    setEditingCategory(null);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/categories/${id}`, { method: 'DELETE' });
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Categories</h2>
      <div className="mb-4">
        <form onSubmit={handleCreate} className="bg-white p-4 rounded-md shadow-md flex items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New category name"
            className="border p-2 mr-2 w-full rounded-md"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Create
          </button>
        </form>
      </div>
      <div className="bg-white shadow-md rounded-md">
        <ul className="divide-y divide-gray-200">
          {categories.map((category) => (
            <li key={category.id} className="flex justify-between items-center p-4">
              <span className="text-lg">{category.name}</span>
              <div>
                <button
                  onClick={() => setEditingCategory(category)}
                  className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {editingCategory && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">Edit Category</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editingCategory.name}
                onChange={(e) =>
                  setEditingCategory({ ...editingCategory, name: e.target.value })
                }
                className="border p-2 mb-4 w-full rounded-md"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setEditingCategory(null)}
                  className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
