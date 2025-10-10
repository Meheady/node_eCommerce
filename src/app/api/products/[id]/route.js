import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

export async function GET(request, { params }) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(params.id) },
      include: { category: true },
    });
    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: 'Error fetching product' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.formData();
    console.log("Form data received:", data);

    const name = data.get('name');
    const description = data.get('description');
    const price = data.get('price');
    const stock = data.get('stock');
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
      const updatedProduct = await prisma.product.update({
        where: { id: parseInt(params.id) },
        data: {
          name,
          description,
          price: parseFloat(price),
          stock,
          categoryId: parseInt(categoryId),
          ...(thumbnail && { thumbnail }),
          ...(images.length > 0 && { images: images.join(',') }),
        },
      });
      console.log("Product updated:", updatedProduct);
      return NextResponse.json(updatedProduct);
    } catch (prismaError) {
      console.error("Prisma error:", prismaError);
      return NextResponse.json({ error: 'Error updating product in database' }, { status: 500 });
    }

  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: 'Error updating product' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await prisma.product.delete({
      where: { id: parseInt(params.id) },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: 'Error deleting product' }, { status: 500 });
  }
}