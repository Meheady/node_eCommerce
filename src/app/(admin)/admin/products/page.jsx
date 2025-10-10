'use client';

import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Image, Alert } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories'),
        ]);
        if (!productsRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data');
        }
        const [productsData, categoriesData] = await Promise.all([
          productsRes.json(),
          categoriesRes.json(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', editingProduct.name);
    formData.append('description', editingProduct.description);
    formData.append('price', editingProduct.price);
    formData.append('categoryId', editingProduct.categoryId);
    if (editingProduct.thumbnailFile) {
      formData.append('thumbnail', editingProduct.thumbnailFile);
    }
    if (editingProduct.imagesFiles) {
      editingProduct.imagesFiles.forEach(image => {
        formData.append('images', image);
      });
    }

    try {
      const res = await fetch(`/api/products/${editingProduct.id}`,
        {
          method: 'PUT',
          body: formData,
        }
      );
      if (!res.ok) {
        throw new Error('Failed to update product');
      }
      const updatedProduct = await res.json();
      setProducts(products.map((p) => p.id === updatedProduct.id ? updatedProduct : p));
      setFeedback({ type: 'success', message: 'Product updated successfully' });
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    } finally {
      setEditingProduct(null);
      setShowModal(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        throw new Error('Failed to delete product');
      }
      setProducts(products.filter((p) => p.id !== id));
      setFeedback({ type: 'success', message: 'Product deleted successfully' });
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    }
  };

  const openModal = (product = null) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setEditingProduct(null);
    setShowModal(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      {feedback.message && <Alert variant={feedback.type}>{feedback.message}</Alert>}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>
        <Button variant="primary" onClick={() => router.push('/admin/products/new')}>Create Product</Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Image src={product.thumbnail} alt={product.name} width={50} height={50} rounded />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category?.name}</td>
              <td>
                <Button variant="warning" onClick={() => openModal(product)} className="me-2">Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingProduct && (
            <Form onSubmit={handleUpdate}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, name: e.target.value })
                  }
                  placeholder="Enter product name"
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, description: e.target.value })
                  }
                  placeholder="Enter product description"
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, price: e.target.value })
                  }
                  placeholder="Enter product price"
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={editingProduct.categoryId}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, categoryId: e.target.value })
                  }
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, thumbnailFile: e.target.files[0] })
                  }
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, imagesFiles: Array.from(e.target.files) })
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