
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// In a real application, you would fetch the user from the database
// and compare the hashed password.
const users = [
  { id: 1, email: 'admin@example.com', password: 'password123' },
];

export async function POST(request) {
  const { email, password } = await request.json();

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // In a real app, use a secret from environment variables
    const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
    return NextResponse.json({ token });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
