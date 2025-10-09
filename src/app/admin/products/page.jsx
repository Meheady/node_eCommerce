
'use client';

import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

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

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/products/${editingProduct.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editingProduct.name, description: editingProduct.description, price: parseFloat(editingProduct.price), categoryId: parseInt(editingProduct.categoryId) }),
      });
    const updatedProduct = await res.json();
    setProducts(products.map((p) => p.id === updatedProduct.id ? updatedProduct : p));
    setEditingProduct(null);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <div className="mb-4">
        <form onSubmit={handleCreate} className="bg-white p-4 rounded-md shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 rounded-md w-full" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2 rounded-md w-full" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="border p-2 rounded-md w-full" />
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="border p-2 rounded-md w-full">
              <option value="">Select Category</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded-md">Create Product</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-sm text-gray-500">Category: {product.category?.name}</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white p-2 rounded-md mr-2">Edit</button>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">Edit Product</h3>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 gap-4">
                <input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} placeholder="Name" className="border p-2 rounded-md w-full" />
                <input type="text" value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} placeholder="Description" className="border p-2 rounded-md w-full" />
                <input type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })} placeholder="Price" className="border p-2 rounded-md w-full" />
                <select value={editingProduct.categoryId} onChange={(e) => setEditingProduct({ ...editingProduct, categoryId: e.target.value })} className="border p-2 rounded-md w-full">
                  <option value="">Select Category</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="flex justify-end mt-4">
                <button type="button" onClick={() => setEditingProduct(null)} className="bg-gray-500 text-white p-2 rounded-md mr-2">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
