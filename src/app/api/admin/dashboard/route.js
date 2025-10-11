import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const productCount = await prisma.product.count();
    const categoryCount = await prisma.category.count();
    const userCount = await prisma.user.count();
    const adminCount = await prisma.user.count({ where: { role: 'ADMIN' } });
    const customerCount = await prisma.user.count({ where: { role: 'CUSTOMER' } });

    return NextResponse.json({
      productCount,
      categoryCount,
      userCount,
      adminCount,
      customerCount,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json({ error: 'Error fetching dashboard data' }, { status: 500 });
  }
}
