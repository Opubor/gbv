import prisma from "@/lib/prisma-client";

export const getAllGetHelp = async () => {
  return await prisma.getHelp.findMany({ orderBy: { createdAt: "desc" } });
};

export const getHelpRequest = async (id: string) => {
  const helpRequest = await prisma.getHelp.findFirst({
    where: {
      id: id,
    },
  });

  return helpRequest;
};
