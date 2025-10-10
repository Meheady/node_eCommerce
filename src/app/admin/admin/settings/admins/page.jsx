"use client";

import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Alert, Table, Modal } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

export default function ManageAdminsPage() {
  const { data: session } = useSession();
  const [admins, setAdmins] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (session?.user?.role === 'ADMIN') {
      fetchAdmins();
    }
  }, [session]);

  const fetchAdmins = async () => {
    try {
      const res = await fetch('/api/admin/users');
      if (!res.ok) {
        throw new Error('Failed to fetch admins');
      }
      const data = await res.json();
      setAdmins(data.filter(user => user.role === 'ADMIN'));
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    setFeedback({ type: '', message: '' });

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newAdminEmail, password: newAdminPassword, role: 'ADMIN' }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create admin');
      }

      setFeedback({ type: 'success', message: 'Admin user created successfully!' });
      setNewAdminEmail('');
      setNewAdminPassword('');
      fetchAdmins(); // Refresh list
      setShowModal(false);
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (!confirm('Are you sure you want to delete this admin user?')) return;

    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to delete admin');
      }

      setFeedback({ type: 'success', message: 'Admin user deleted successfully!' });
      fetchAdmins(); // Refresh list
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    }
  };

  // if (session?.user?.role !== 'ADMIN') {
  //   return <Alert variant="danger">Access Denied: You must be an administrator to view this page.</Alert>;
  // }

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>Manage Admin Users</Card.Title>
        </Card.Header>
        <Card.Body>
          {feedback.message && <Alert variant={feedback.type}>{feedback.message}</Alert>}
          <div className="d-flex justify-content-end mb-3">
            <Button variant="primary" onClick={() => setShowModal(true)}>Add New Admin</Button>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.id}</td>
                  <td>{admin.email}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteAdmin(admin.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateAdmin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={newAdminPassword}
                onChange={(e) => setNewAdminPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Admin
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
