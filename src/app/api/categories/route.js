
import { NextResponse } from 'next/server';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Books' },
];

export async function GET() {
  return NextResponse.json(categories);
}

export async function POST(request) {
  const { name } = await request.json();
  const newCategory = { id: categories.length + 1, name };
  categories.push(newCategory);
  return NextResponse.json(newCategory, { status: 201 });
}
