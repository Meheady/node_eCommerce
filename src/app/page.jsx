import HomePageClient from '@/components/HomePageClient';
import prisma from '@/lib/prisma';

async function getHomePageData() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return { categories, products };
}

export default async function HomePage() {
  const { categories, products } = await getHomePageData();

  return <HomePageClient initialAllItems={products} initialCategories={categories} />;
}
