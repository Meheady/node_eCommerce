
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: 'Error fetching categories' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const file = data.get('image');

    let filename = '/placeholder.jpg'

    if (file && file?.size > 0){
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      filename = `${Date.now()}-${file.name}`;
      const path = join(process.cwd(), 'public/uploads', filename);
      await writeFile(path, buffer);

      filename = `/uploads/${filename}`;
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        image: `${filename}`,
      },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: 'Error creating category' }, { status: 500 });
  }
}
