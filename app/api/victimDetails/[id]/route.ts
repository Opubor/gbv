import prisma from "@/lib/prisma-client";
import {
  TEditVictimDetailsSchema,
  editVictimDetailsSchema,
} from "@/schema/victimDetails";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<any> {
  const body: TEditVictimDetailsSchema = await req.json();
  const result = editVictimDetailsSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      }),
      { status: 404 }
    );
  }

  try {
    const victimDetails = await prisma.victim.update({
      where: { id: params?.id },
      data: {
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
      return new Response(JSON.stringify("Updated Successful"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Error during update"), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
