import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import {
  TVictimDetailsSchema,
  victimDetailsSchema,
} from "@/schema/victimDetails";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/option";

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
        activityHeader: "Added Victim details",
        activityName: `Added victim details for Case - ${vd?.case?.caseId}`,
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

export async function GET(req: NextRequest, res: NextResponse) {
  const allVictimDetails = await prisma.victim.findMany({
    include: {
      case: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return new Response(JSON.stringify(allVictimDetails), {
    status: 200,
  });
}
