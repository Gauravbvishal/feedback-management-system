import prisma from "../config/prisma.js";

export async function getAnalytics() {
  const totalFeedback = await prisma.feedback.count();

  const categoryDistribution = await prisma.feedback.groupBy({
    by: ["category"],
    _count: {
      category: true,
    },
  });

  const recentSubmissions = await prisma.feedback.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      category: true,
      feedback: true,
      email: true,
      createdAt: true,
    },
  });

  return {
    totalFeedback,
    categoryDistribution: categoryDistribution.map((item) => ({
      category: item.category,
      count: item._count.category,
    })),
    recentSubmissions,
  };
}