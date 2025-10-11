'use client';

import { useSession } from 'next-auth/react';
import { Container, Card } from 'react-bootstrap';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>User Profile</Card.Header>
        <Card.Body>
          {session ? (
            <div>
              <p><strong>Name:</strong> {session.user.name}</p>
              <p><strong>Email:</strong> {session.user.email}</p>
              <p><strong>Role:</strong> {session.user.role}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
