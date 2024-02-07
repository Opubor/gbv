import prisma from "@/lib/prisma-client";

export const getVictimDetails = async (id: string) => {
  const victim = await prisma.victim.findFirst({
    where: {
      id: id,
    },
    include: {
      case: true,
    },
  });

  return victim;
};

export const getAllVictims = async () => {
  const allVictims = await prisma.victim.findMany({
    include: {
      case: true,
    },
  });
  return allVictims;
};
