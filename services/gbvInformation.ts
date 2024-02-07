import prisma from "@/lib/prisma-client";

export const getGbvInformation = async (id: string) => {
  const gbvInformation = await prisma.gbvInformation.findFirst({
    where: {
      id: id,
    },
    include: {
      case: true,
    },
  });

  return gbvInformation;
};
