import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';
import sharp from 'sharp';

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

    const name = data.get('name');
    const description = data.get('description');
    const price = data.get('price');
    const stock = data.get('stock');
    const categoryId = data.get('categoryId');
    const thumbnailFile = data.get('thumbnail');
    const imageFiles = data.getAll('images');

    const uploadDir = join(process.cwd(), 'public/uploads');
    await mkdir(uploadDir, { recursive: true });

    let thumbnail;
    if (thumbnailFile && thumbnailFile.size > 0) {
      const bytes = await thumbnailFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${thumbnailFile.name.split('.').slice(0, -1).join('.')}.webp`;
      const path = join(uploadDir, filename);
      
      await sharp(buffer)
        .webp({ quality: 90 })
        .toFile(path);

      thumbnail = `/uploads/${filename}`;
    }

    let images = [];
    if (imageFiles.length > 0) {
      for (const file of imageFiles) {
        if (file.size > 0){
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const filename = `${Date.now()}-${file.name.split('.').slice(0, -1).join('.')}.webp`;
          const path = join(uploadDir, filename);
          
          await sharp(buffer)
            .webp({ quality: 90 })
            .toFile(path);

          images.push(`/uploads/${filename}`);
        }
      }
    }

    try {
      const updatedProduct = await prisma.product.update({
        where: { id: parseInt(params.id) },
        data: {
          name,
          description,
          price: parseFloat(price),
          stock: parseFloat(stock) ?? 0,
          categoryId: parseInt(categoryId),
          ...(thumbnail && { thumbnail }),
          ...(images.length > 0 && { images: images.join(',') }),
        },
      });
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