import prisma from "@/lib/prisma-client";
import { TCaseSchema, caseSchema } from "@/schema/case";
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
  const body: TCaseSchema = await req.json();
  const result = caseSchema.safeParse(body);

  if (!result.success) {
    console.log(result.error.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      }),
      { status: 404 }
    );
  }

  try {
    const editCase = await prisma.case.update({
      where: { id: params?.id },
      data: {
        registeredBy: result?.data?.registeredBy,
        incidentDate: result?.data?.incidentDate,
        registrationDate: result?.data?.registrationDate,
        registrationTime: result?.data?.registrationTime,
        region: result?.data?.region,
        serviceProviderId: result?.data?.serviceProviderId,
        tbid: result?.data?.tbid,
        serviceProviderReferralId:
          result?.data?.serviceProviderReferralId!?.length > 0
            ? result?.data?.serviceProviderReferralId
            : null,
      },
    });

    const session = await getServerSession(options);

    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Update Case",
        activityName: `Updated case details - ${editCase?.caseId}`,
      },
    });
    if (editCase) {
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<any> {
  try {
    let deleteCase = await prisma.case.delete({
      where: { id: params?.id },
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Delete case",
        activityName: `Deleted a case - ${deleteCase?.caseId}`,
      },
    });

    if (deleteCase) {
      return new Response(JSON.stringify("Deleted Successfully"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Error"), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
