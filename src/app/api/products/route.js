import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    console.log("Form data received:", data);

    const name = data.get('name');
    const description = data.get('description');
    const price = data.get('price');
    const categoryId = data.get('categoryId');
    const thumbnailFile = data.get('thumbnail');
    const imageFiles = data.getAll('images');

    console.log("Fields:", { name, description, price, categoryId });

    const uploadDir = join(process.cwd(), 'public/uploads');
    await mkdir(uploadDir, { recursive: true });

    let thumbnail;
    if (thumbnailFile) {
      const bytes = await thumbnailFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${thumbnailFile.name}`;
      const path = join(uploadDir, filename);
      await writeFile(path, buffer);
      thumbnail = `/uploads/${filename}`;
      console.log("Thumbnail uploaded:", thumbnail);
    }

    let images = [];
    if (imageFiles.length > 0) {
      for (const file of imageFiles) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = `${Date.now()}-${file.name}`;
        const path = join(uploadDir, filename);
        await writeFile(path, buffer);
        images.push(`/uploads/${filename}`);
      }
      console.log("Images uploaded:", images);
    }

    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          categoryId: parseInt(categoryId),
          thumbnail,
          images: images.join(','),
        },
      });
      console.log("Product created:", newProduct);
      return NextResponse.json(newProduct, { status: 201 });
    } catch (prismaError) {
      console.error("Prisma error:", prismaError);
      return NextResponse.json({ error: 'Error creating product in database' }, { status: 500 });
    }

  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}