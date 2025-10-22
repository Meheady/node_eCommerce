'use client';

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function NewCategoryPage() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    await fetch('/api/categories', {
      method: 'POST',
      body: formData,
    });
    router.push('/admin/categories');
  };

  return (
    <div>
      <h2>Create New Category</h2>
      <Form onSubmit={handleCreate}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
              required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
          />
        </Form.Group>
        <Form.Group className="mt-3 d-none">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Create
        </Button>
      </Form>
    </div>
  );
}