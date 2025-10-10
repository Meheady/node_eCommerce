import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route"; // Adjust path as needed

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const { id } = params;
    const body = await request.json();
    const { email, password, image, role } = body;

    const dataToUpdate = {};
    if (email) dataToUpdate.email = email;
    if (image) dataToUpdate.image = image;
    if (role) dataToUpdate.role = role;
    if (password) {
      dataToUpdate.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
      select: { id: true, email: true, role: true, image: true }, // Select fields to return
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to update user', error: error.message }), { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const { id } = params;

    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to delete user', error: error.message }), { status: 500 });
  }
}
