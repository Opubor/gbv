import prisma from "@/lib/prisma-client";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (id: string) => {
  const user = await prisma.user.findFirst({
    include: {
      userBranch: true,
    },
    where: {
      id: id,
    },
  });

  return user;
};
