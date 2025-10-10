"use client"
import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
    const { data: session, update } = useSession();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [feedback, setFeedback] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || '');
            setEmail(session.user.email || '');
            setLoading(false);
        } else if (!session) {
            setLoading(false);
        }
    }, [session]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFeedback({ type: '', message: '' });

        if (password !== confirmPassword) {
            setFeedback({ type: 'danger', message: 'Passwords do not match' });
            return;
        }

        if (!session?.user?.id) {
            setFeedback({ type: 'danger', message: 'User not authenticated' });
            return;
        }

        try {
            const res = await fetch(`/api/admin/users/${session.user.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    ...(password && { password }), // Only send password if it's not empty
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            const updatedUser = await res.json();
            // Update the session with new data
            update({ name: updatedUser.name, email: updatedUser.email });

            setFeedback({ type: 'success', message: 'Profile updated successfully!' });
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setFeedback({ type: 'danger', message: error.message });
        }
    };

    if (loading) {
        return <Container><p>Loading profile...</p></Container>;
    }

    if (!session) {
        return <Container><Alert variant="danger">You must be logged in to view this page.</Alert></Container>;
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Update Profile</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {feedback.message && <Alert variant={feedback.type}>{feedback.message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter new password (optional)"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Update Profile
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
