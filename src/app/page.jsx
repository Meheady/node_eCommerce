"use client";

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-light p-5 text-center mb-4">
        <Container>
          <h1 className="display-4">Welcome to Our E-commerce Store!</h1>
          <p className="lead">Discover amazing products at unbeatable prices.</p>
          <Button variant="primary" size="lg" as={Link} href="/products">Shop Now</Button>
        </Container>
      </div>

      {/* Featured Products Section */}
      <Container className="mb-4">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <div style={{ position: 'relative', height: '200px' }}>
                <Image src="/uploads/product-03.jpg" alt="Product 1" fill style={{ objectFit: 'cover' }} className="card-img-top" />
              </div>
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>Description of product 1.</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <div style={{ position: 'relative', height: '200px' }}>
                <Image src="/uploads/product-03.jpg" alt="Product 2" fill style={{ objectFit: 'cover' }} className="card-img-top" />
              </div>
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>Description of product 2.</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <div style={{ position: 'relative', height: '200px' }}>
                <Image src="/uploads/product-03.jpg" alt="Product 3" fill style={{ objectFit: 'cover' }} className="card-img-top" />
              </div>
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>Description of product 3.</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="bg-primary text-white p-5 text-center">
        <Container>
          <h2>Ready to get started?</h2>
          <p>Sign up now to receive exclusive offers and updates.</p>
          <Button variant="light" size="lg" as={Link} href="/signup">Sign Up</Button>
        </Container>
      </div>
    </>
  );
}