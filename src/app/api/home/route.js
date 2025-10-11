import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    const logoSetting = await prisma.setting.findUnique({
      where: { key: 'logo' },
    });

    return NextResponse.json({
      categories,
      products,
      logo: logoSetting ? logoSetting.value : null,
    });
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return NextResponse.json({ error: 'Error fetching home page data' }, { status: 500 });
  }
}
