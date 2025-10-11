import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path as needed
import { writeFile } from 'fs/promises';
import { join } from 'path';

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
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name}`;
      const path = join(process.cwd(), 'public/uploads', filename);
      await writeFile(path, buffer);

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