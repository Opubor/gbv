import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import {
  perpetratorDetailsSchema,
  TPerpetratorDetailsSchema,
} from "@/schema/perpetratorDetails";

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
