import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import {
  perpetratorDetailsSchema,
  TPerpetratorDetailsSchema,
} from "@/schema/perpetratorDetails";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/option";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TPerpetratorDetailsSchema = await req.json();

  const result = perpetratorDetailsSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      }),
      { status: 404 }
    );
  }

  try {
    const perpetratorDetails = await prisma.perpetrator.create({
      data: {
        caseId: result?.data?.caseId,
        age: result?.data?.age,
        contactWithPerpetrator: result?.data?.contactWithPerpetrator,
        disabled: result?.data?.disabled,
        dob: result?.data?.dob,
        mainActivity: result?.data?.mainActivity,
        maritalStatus: result?.data?.maritalStatus,
        nationality: result?.data?.nationality,
        noOfPerpetrators: result?.data?.noOfPerpetrators,
        protectionOrder: result?.data?.protectionOrder,
        religion: result?.data?.religion,
        residentialVillage: result?.data?.residentialVillage,
        secondVillage: result?.data?.secondVillage,
        sex: result?.data?.sex,
        typeOfDisability: result?.data?.typeOfDisability,
        fullName: result?.data?.fullName,
        aka: result?.data?.aka,
      },
    });

    let pd = await prisma.perpetrator.findFirst({
      where: { id: perpetratorDetails?.id },
      include: { case: true },
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Added Perpetrator details",
        activityName: `Added perpetrator details for Case - ${pd?.case?.caseId}`,
      },
    });

    if (perpetratorDetails) {
      return new Response(JSON.stringify("Registration Successful"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Error during registration"), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const allPerpetratorDetails = await prisma.perpetrator.findMany({
    include: {
      case: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return new Response(JSON.stringify(allPerpetratorDetails), {
    status: 200,
  });
}
