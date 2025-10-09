
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return NextResponse.json(products);
}

export async function POST(request) {
  const { name, description, price, categoryId } = await request.json();
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price,
      categoryId,
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}
