import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search");

  if (search) {
    const staffs = await prisma.user.findMany({
      where: {
        OR: [
          { firstName: { contains: search?.toString() } },
          { lastName: { contains: search?.toString() } },
        ],
      },
      include: { userBranch: true },
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(staffs), {
      status: 200,
    });
  } else {
    const staffs = await prisma.user.findMany({
      include: { userBranch: true },
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(staffs), {
      status: 200,
    });
  }
}
