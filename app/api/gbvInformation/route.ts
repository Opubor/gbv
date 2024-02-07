import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import {
  TVictimDetailsSchema,
  victimDetailsSchema,
} from "@/schema/victimDetails";
import {
  TGbvInformationSchema,
  gbvInformationSchema,
} from "@/schema/gbvInformation";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TGbvInformationSchema = await req.json();

  const result = gbvInformationSchema.safeParse(body);
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
    const gbvInformation = await prisma.gbvInformation.create({
      data: {
        caseId: result?.data?.caseId,
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
    if (gbvInformation) {
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
