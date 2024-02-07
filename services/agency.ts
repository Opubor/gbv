import prisma from "@/lib/prisma-client";

export const getAllAgencies = async () => {
  const agencies = await prisma.agency.findMany({
    include: { serviceProvider: true, serviceProviderReferral: true },
    orderBy: { createdAt: "desc" },
  });
  return agencies;
};

export const getAgency = async (id: string) => {
  const agency = await prisma.agency.findFirst({
    where: {
      id: id,
    },
  });

  return agency;
};
