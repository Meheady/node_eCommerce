
import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop', description: 'A powerful laptop', price: 1200, categoryId: 1 },
  { id: 2, name: 'The Great Gatsby', description: 'A classic novel', price: 15, categoryId: 2 },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const { name, description, price, categoryId } = await request.json();
  const newProduct = { id: products.length + 1, name, description, price, categoryId };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
