
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <Link href="/">Back to products</Link>
        <div className="mt-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-500 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold mt-4">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
