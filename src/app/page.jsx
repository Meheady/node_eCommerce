import HomePageClient from '@/components/HomePageClient';
import prisma from '@/lib/prisma';

export const revalidate = 60;

async function getHomePageData() {
  const categories = await prisma.category.findMany();
  const logoSetting = await prisma.setting.findUnique({
    where: { key: 'logo' },
  });
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return { categories, products,logo: logoSetting?.value || '/placeholder.jpg' };
}

export default async function HomePage() {
  const { categories, products, logo } = await getHomePageData();

  return <HomePageClient logo={logo}  initialAllItems={products} initialCategories={categories} />;
}
