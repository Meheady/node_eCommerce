"use client";

import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import Image from 'next/image';

export default function WebsiteSettingsPage() {
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setLogo(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: '', message: '' });

    const formData = new FormData();
    if (logo) {
      formData.append('logo', logo);
    }
    // Add other settings to formData if needed

    try {
      const res = await fetch('/api/admin/settings/website', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to update website settings');
      }

      setFeedback({ type: 'success', message: 'Website settings updated successfully!' });
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    }
  };

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>Website Settings</Card.Title>
        </Card.Header>
        <Card.Body>
          {feedback.message && <Alert variant={feedback.type}>{feedback.message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formLogo" className="mb-3">
              <Form.Label>Website Logo</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleLogoChange} />
              {preview && (
                <div className="mt-3">
                  <Image src={preview} alt="Logo Preview" width={150} height={150} style={{ objectFit: 'contain' }} />
                </div>
              )}
            </Form.Group>

            {/* Add other website settings here */}

            <Button variant="primary" type="submit">
              Save Settings
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
