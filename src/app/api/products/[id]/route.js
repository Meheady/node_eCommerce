
import { NextResponse } from 'next/server';

let products = [
  { id: 1, name: 'Laptop', description: 'A powerful laptop', price: 1200, categoryId: 1 },
  { id: 2, name: 'The Great Gatsby', description: 'A classic novel', price: 15, categoryId: 2 },
];

export async function GET(request, { params }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(request, { params }) {
  const { name, description, price, categoryId } = await request.json();
  const productIndex = products.findIndex((p) => p.id === parseInt(params.id));
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], name, description, price, categoryId };
    return NextResponse.json(products[productIndex]);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}

export async function DELETE(request, { params }) {
  const productIndex = products.findIndex((p) => p.id === parseInt(params.id));
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    return new NextResponse(null, { status: 204 });
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}
