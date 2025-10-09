
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (category) {
      return NextResponse.json(category);
    } else {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json({ error: 'Error fetching category' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { name } = await request.json();
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(params.id) },
      data: { name },
    });
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json({ error: 'Error updating category' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await prisma.category.delete({
      where: { id: parseInt(params.id) },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: 'Error deleting category' }, { status: 500 });
  }
}

