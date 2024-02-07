import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import {
  TVictimDetailsSchema,
  victimDetailsSchema,
} from "@/schema/victimDetails";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TVictimDetailsSchema = await req.json();

  const result = victimDetailsSchema.safeParse(body);
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
    const victimDetails = await prisma.victim.create({
      data: {
        caseId: result?.data?.caseId,
        age: result?.data?.age,
        causeOfViolence: result?.data?.causeOfViolence,
        disabled: result?.data?.disabled,
        dob: result?.data?.dob,
        immediateProtection: result?.data?.immediateProtection,
        incidentLocation: result?.data?.incidentLocation,
        incidentTime: result?.data?.incidentTime,
        incidentVillage: result?.data?.incidentVillage,
        mainActivity: result?.data?.mainActivity,
        maritalStatus: result?.data?.maritalStatus,
        nationality: result?.data?.nationality,
        newClient: result?.data?.newClient,
        perpetratorSex: result?.data?.perpetratorSex,
        perpetratorSurvivorRelationship:
          result?.data?.perpetratorSurvivorRelationship,
        religion: result?.data?.religion,
        residentialVillage: result?.data?.residentialVillage,
        secondVillage: result?.data?.secondVillage,
        sex: result?.data?.sex,
        typeOfDisability: result?.data?.typeOfDisability,
        violenceType: result?.data?.violenceType,
      },
    });
    if (victimDetails) {
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
