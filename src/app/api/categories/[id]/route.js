import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';


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
    const data = await request.formData();
    const name = data.get('name');
    const file = data.get('image');

    const existingCategory = await prisma.category.findUnique({
      where: { id: parseInt(params.id) },
    });

    let image;
    if (file && file.size > 0) {
      if (existingCategory && existingCategory.image && existingCategory.image !== '/placeholder.jpg') {
        const oldImagePath = join(process.cwd(), 'public', existingCategory.image);
        try {
          await unlink(oldImagePath);
        } catch (error) {
          console.error("Error deleting old image:", error);
        }
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name.split('.').slice(0, -1).join('.')}.webp`;
      const path = join(process.cwd(), 'public/uploads', filename);
      
      await sharp(buffer)
        .webp({ quality: 90 })
        .toFile(path);

      image = `/uploads/${filename}`;
    }

    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(params.id) },
      data: { 
        name,
        ...(image && { image }),
       },
    });

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json({ error: 'Error updating category' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (category && category.image && category.image !== '/placeholder.jpg') {
      const imagePath = join(process.cwd(), 'public', category.image);
      try {
        await unlink(imagePath);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    await prisma.category.delete({
      where: { id: parseInt(params.id) },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: 'Error deleting category' }, { status: 500 });
  }
}