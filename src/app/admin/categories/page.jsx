'use client';

import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Image, Alert } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', editingCategory.name);
    if (editingCategory.imageFile) {
      formData.append('image', editingCategory.imageFile);
    }

    try {
      const res = await fetch(`/api/categories/${editingCategory.id}`,
        {
          method: 'PUT',
          body: formData,
        }
      );
      if (!res.ok) {
        throw new Error('Failed to update category');
      }
      const updatedCategory = await res.json();
      setCategories(
        categories.map((c) => (c.id === updatedCategory.id ? updatedCategory : c))
      );
      setFeedback({ type: 'success', message: 'Category updated successfully' });
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    } finally {
      setEditingCategory(null);
      setShowModal(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        throw new Error('Failed to delete category');
      }
      setCategories(categories.filter((c) => c.id !== id));
      setFeedback({ type: 'success', message: 'Category deleted successfully' });
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    }
  };

  const openModal = (category = null) => {
    setEditingCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setEditingCategory(null);
    setShowModal(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      {feedback.message && <Alert variant={feedback.type}>{feedback.message}</Alert>}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Categories</h2>
        <Button variant="primary" onClick={() => router.push('/admin/categories/new')}>Create Category</Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <Image src={category.image} alt={category.name} width={50} height={50} rounded />
              </td>
              <td>{category.name}</td>
              <td>
                <Button variant="warning" onClick={() => openModal(category)} className="me-2">Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(category.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingCategory && (
            <Form onSubmit={handleUpdate}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) =>
                    setEditingCategory({ ...editingCategory, name: e.target.value })
                  }
                  placeholder="Enter category name"
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) =>
                    setEditingCategory({ ...editingCategory, imageFile: e.target.files[0] })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Update
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}