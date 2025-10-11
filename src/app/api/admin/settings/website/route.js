import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path as needed
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

const prisma = new PrismaClient();

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const data = await request.formData();
    const file = data.get('logo');

    if (file && file.size > 0) {
      // Get the old logo path
      const oldLogoSetting = await prisma.setting.findUnique({
        where: { key: 'logo' },
      });

      // If there is an old logo, delete it
      if (oldLogoSetting && oldLogoSetting.value) {
        const oldLogoPath = join(process.cwd(), 'public', oldLogoSetting.value);
        try {
          await unlink(oldLogoPath);
        } catch (error) {
          console.error("Error deleting old logo:", error);
        }
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name.split('.').slice(0, -1).join('.')}.webp`;
      const path = join(process.cwd(), 'public/uploads', filename);

      await sharp(buffer)
        .webp({ quality: 90 })
        .toFile(path);

      const logoPath = `/uploads/${filename}`;
      await prisma.setting.upsert({
        where: { key: 'logo' },
        update: { value: logoPath },
        create: { key: 'logo', value: logoPath },
      });

      return NextResponse.json({ message: 'Logo uploaded successfully', logoPath }, { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ message: 'No file uploaded' }), { status: 400 });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to upload logo', error: error.message }), { status: 500 });
  }
}