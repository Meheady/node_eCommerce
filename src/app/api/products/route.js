import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';
import sharp from 'sharp';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');

  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: search || '',
        },
      },
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
    } else {
      thumbnail = '/placeholder.jpg';
    }

    let images = [];
    if (imageFiles.length > 0) {
      for (const file of imageFiles) {
        if (file.size > 0) {
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
    } else{
      images = ['/placeholder.jpg']
    }

    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          stock: parseFloat(stock),
          categoryId: parseInt(categoryId),
          thumbnail,
          images: images.join(','),
        },
      });
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