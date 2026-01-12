// import prisma from '@/lib/prisma';
// import DashboardClient from './DashboardClient';
//
// async function getDashboardData() {
//   const productCount = await prisma.product.count();
//   const categoryCount = await prisma.category.count();
//   const adminCount = await prisma.user.count({ where: { role: 'ADMIN' } });
//   const customerCount = await prisma.user.count({ where: { role: 'CUSTOMER' } });
//
//   return {
//     productCount,
//     categoryCount,
//     adminCount,
//     customerCount,
//   };
// }
//
// export default async function Page() {
//   const dashboardData = await getDashboardData();
//
//   return <DashboardClient {...dashboardData} />;
// }