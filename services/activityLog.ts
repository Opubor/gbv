import prisma from "@/lib/prisma-client";

export const getAllActiviies = async () => {
  const agencies = await prisma.activityLog.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });
  return agencies;
};

export const getMyActivites = async (id: string) => {
  const agency = await prisma.activityLog.findMany({
    where: {
      userId: id,
    },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return agency;
};
