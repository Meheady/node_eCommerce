
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
    include: { category: true },
  });
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}

export async function PUT(request, { params }) {
  const { name, description, price, categoryId } = await request.json();
  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(params.id) },
    data: {
      name,
      description,
      price,
      categoryId,
    },
  });
  return NextResponse.json(updatedProduct);
}

export async function DELETE(request, { params }) {
  await prisma.product.delete({
    where: { id: parseInt(params.id) },
  });
  return new NextResponse(null, { status: 204 });
}
