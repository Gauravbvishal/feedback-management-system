import prisma from "../config/prisma.js";

export async function createFeedback(data) {
  return await prisma.feedback.create({
    data: {
      category: data.category,
      feedback: data.feedback,
      email: data.email || null,
    },
  });
}

export async function getFeedback({
  page,
  limit,
  search,
  category,
}) {
  const skip = (page - 1) * limit;

  const where = {
    ...(category && { category }),

    ...(search && {
      OR: [
        {
          feedback: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    }),
  };

  const [feedbacks, total] = await Promise.all([
    prisma.feedback.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.feedback.count({
      where,
    }),
  ]);

  return {
    feedbacks,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}