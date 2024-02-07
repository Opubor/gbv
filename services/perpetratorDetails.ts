import prisma from "@/lib/prisma-client";

export const getPerpetratorDetails = async (id: string) => {
  const perpetrator = await prisma.perpetrator.findFirst({
    where: {
      id: id,
    },
    include: {
      case: true,
    },
  });

  return perpetrator;
};

export const getAllPerpetrators = async () => {
  const allPerpetrators = await prisma.perpetrator.findMany({
    include: {
      case: true,
    },
  });
  return allPerpetrators;
};
