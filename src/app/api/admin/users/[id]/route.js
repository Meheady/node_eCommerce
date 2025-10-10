import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route"; // Adjust path as needed

const prisma = new PrismaClient();

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
