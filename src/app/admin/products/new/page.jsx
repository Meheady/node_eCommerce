'use client';

import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function NewProductPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('categoryId', categoryId);
    formData.append('thumbnail', thumbnail);
    images.forEach(image => {
      formData.append('images', image);
    });

    await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });
    router.push('/admin/products');
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <Form onSubmit={handleCreate}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
              required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
              required
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter product stock"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
              required
            as="select"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Images</Form.Label>
          <Form.Control
            type="file"
            multiple
            onChange={(e) => setImages(Array.from(e.target.files))}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Create
        </Button>
      </Form>
    </div>
  );
}