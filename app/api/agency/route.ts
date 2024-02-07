import prisma from "@/lib/prisma-client";
import { registerUserSchema, TRegisterUserSchema } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { agencySchema, TAgencySchema } from "@/schema/agency";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TAgencySchema = await req.json();
  const result = agencySchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  try {
    const agency = await prisma.agency.create({
      data: {
        name: result?.data?.name,
        email: result?.data?.email,
        phone1: result?.data?.phone1,
        phone2: result?.data?.phone2,
        address: result?.data?.address,
        branch: result?.data?.branch,
        city: result?.data?.city,
        about: result?.data?.about,
        founded: result?.data?.founded,
      },
    });

    return new Response(JSON.stringify("Registration Successful"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search");

  if (search || search !== "") {
    const allAgencies = await prisma.agency.findMany({
      where: { name: { contains: search?.toString() } },
      include: {
        serviceProvider: true,
        serviceProviderReferral: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(allAgencies), {
      status: 200,
    });
  } else {
    const allAgencies = await prisma.agency.findMany({
      include: {
        serviceProvider: true,
        serviceProviderReferral: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(allAgencies), {
      status: 200,
    });
  }
}
