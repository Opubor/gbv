import prisma from "@/lib/prisma-client";
import {
  TEditVictimDetailsSchema,
  editVictimDetailsSchema,
} from "@/schema/victimDetails";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/option";

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
        firstName: result?.data?.firstName,
        lastName: result?.data?.lastName,
        attendingSchool: result?.data?.attendingSchool,
        nameOfSchool: result?.data?.nameOfSchool,
        gradeInSchool: result?.data?.gradeInSchool,
        typeOfCase: result?.data?.typeOfCase,
        homeVisitDates: result?.data?.homeVisitDates,
        nameOfFather: result?.data?.nameOfFather,
        nameOfMother: result?.data?.nameOfMother,
        statusCase: result?.data?.statusCase,
        contactNumber: result?.data?.contactNumber,
      },
    });

    let vd = await prisma.victim.findFirst({
      where: { id: victimDetails?.id },
      include: { case: true },
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Updated Victim details",
        activityName: `Updated victim details for Case - ${vd?.case?.caseId}`,
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
