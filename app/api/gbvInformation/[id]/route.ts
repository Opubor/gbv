import prisma from "@/lib/prisma-client";
import {
  TEditGbvInformationSchema,
  editGbvInformationSchema,
} from "@/schema/gbvInformation";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/option";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<any> {
  const body: TEditGbvInformationSchema = await req.json();
  const result = editGbvInformationSchema.safeParse(body);

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
    const gbvInformation = await prisma.gbvInformation.update({
      where: { id: params?.id },
      data: {
        anyService: result?.data?.anyService,
        droppedOutVictim: result?.data?.droppedOutVictim,
        policeReport: result?.data?.policeReport,
        protectionOrder: result?.data?.protectionOrder,
        redirected: result?.data?.redirected,
        referredBy: result?.data?.referredBy,
        satisfiedService: result?.data?.satisfiedService,
        suicideAttempt: result?.data?.suicideAttempt,
        noOfAttempts: result?.data?.noOfAttempts,
        reasonNotSatisfied: result?.data?.reasonNotSatisfied,
        suicideMethod: result?.data?.suicideMethod,
        suicideTime: result?.data?.suicideTime,
        medicalSupport: result?.data?.medicalSupport,
        emotionalSupport: result?.data?.emotionalSupport,
        infoLocal: result?.data?.infoLocal,
        legalAssistance: result?.data?.legalAssistance,
        otherSupport: result?.data?.otherSupport,
        psychological: result?.data?.psychological,
        vocTraining: result?.data?.vocTraining,
        securityProtection: result?.data?.securityProtection,
        shelter: result?.data?.shelter,
        rsEmotionalSupport: result?.data?.rsEmotionalSupport,
        rsInfoLocal: result?.data?.rsInfoLocal,
        rsLegalAssistance: result?.data?.rsLegalAssistance,
        rsMedicalSupport: result?.data?.rsMedicalSupport,
        rsOtherSupport: result?.data?.rsOtherSupport,
        rsPsychological: result?.data?.rsPsychological,
        rsSecurityProtection: result?.data?.rsSecurityProtection,
        rsShelter: result?.data?.rsShelter,
        rsVocTraining: result?.data?.rsVocTraining,
      },
    });

    let gbv = await prisma.gbvInformation.findFirst({
      where: { id: gbvInformation?.id },
      include: { case: true },
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Updated GBV Information",
        activityName: `Updated GBV information for Case - ${gbv?.case?.caseId}`,
      },
    });

    if (gbvInformation) {
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
