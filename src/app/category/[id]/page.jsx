
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter(p => p.categoryId === parseInt(id));
          setProducts(filtered);
        });
      
      fetch(`/api/categories/${id}`)
        .then(res => res.json())
        .then(data => setCategory(data));
    }
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <Link href="/">Back to products</Link>
        <h1 className="text-4xl font-bold text-center mb-8">
          {category ? category.name : 'Category'}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-lg font-semibold mt-2">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
