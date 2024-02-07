import prisma from "@/lib/prisma-client";
import {
  TEditPerpetratorDetailsSchema,
  editPerpetratorDetailsSchema,
} from "@/schema/perpetratorDetails";
import { TEditProfileSchema } from "@/schema/user";
import {
  TEditVictimDetailsSchema,
  editVictimDetailsSchema,
} from "@/schema/victimDetails";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<any> {
  const body: TEditPerpetratorDetailsSchema = await req.json();
  const result = editPerpetratorDetailsSchema.safeParse(body);

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
    const perpetratorDetails = await prisma.perpetrator.update({
      where: { id: params?.id },
      data: {
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
