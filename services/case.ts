import prisma from "@/lib/prisma-client";

export const getAllCases = async () => {
  const allCases = await prisma.case.findMany({
    include: {
      Victim: true,
      GbvInformation: true,
      Perpetrator: true,
      serviceProvider: true,
      serviceProviderReferral: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return allCases;
};

export const getCase = async (id: string) => {
  const serviceProvider = await prisma.case.findFirst({
    where: {
      id: id,
    },
    include: {
      Victim: true,
      Perpetrator: true,
      GbvInformation: true,
      serviceProvider: true,
      serviceProviderReferral: true,
    },
  });

  return serviceProvider;
};
