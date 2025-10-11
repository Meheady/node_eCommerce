'use client';

import { Row, Col, Card } from 'react-bootstrap';

export default function DashboardClient({ productCount, categoryCount, adminCount, customerCount }) {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Card bg="primary" text="white" className="mb-3">
            <Card.Header>Products</Card.Header>
            <Card.Body>
              <Card.Title>{productCount}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white" className="mb-3">
            <Card.Header>Categories</Card.Header>
            <Card.Body>
              <Card.Title>{categoryCount}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="danger" text="white" className="mb-3">
            <Card.Header>Admins</Card.Header>
            <Card.Body>
              <Card.Title>{adminCount}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white" className="mb-3">
            <Card.Header>Customers</Card.Header>
            <Card.Body>
              <Card.Title>{customerCount}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
