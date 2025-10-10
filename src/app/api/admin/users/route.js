import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path as needed

const prisma = new PrismaClient();

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, role: true },
    });
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch users', error: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const { email, password, role } = await request.json();

    if (!email || !password || !role) {
      return new NextResponse(JSON.stringify({ message: 'Email, password, and role are required' }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to create user', error: error.message }), { status: 500 });
  }
}
