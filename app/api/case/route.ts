import prisma from "@/lib/prisma-client";
import { registerUserSchema, TRegisterUserSchema } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { agencySchema, TAgencySchema } from "@/schema/agency";
import { caseSchema, TCaseSchema } from "@/schema/case";
import { randomBytes } from "crypto";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TCaseSchema = await req.json();
  const result = caseSchema.safeParse(body);
  if (!result.success) {
    console.log(result.error.message);
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      }),
      { status: 404 }
    );
  }
  try {
    const date = new Date();
    let caseId = "GBV" + date.getDate() + randomBytes(2).toString("hex");

    const newCase = await prisma.case.create({
      data: {
        caseId: caseId,
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

    const activityLog = await prisma.activityLog.create({
      data: {
        userId: result?.data?.userId,
        activityHeader: "New case added",
        activityName: `Added a new case - ${newCase?.caseId}`,
      },
    });

    if (newCase) {
      return new Response(JSON.stringify("Registration Successful"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Error during registration"), {
        status: 404,
      });
    }

    return new Response(JSON.stringify("Registration Successful"), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 404 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search");

  if (search || search !== "") {
    const allCases = await prisma.case.findMany({
      where: { caseId: { contains: search?.toString() } },
      include: {
        GbvInformation: true,
        Perpetrator: true,
        serviceProvider: true,
        serviceProviderReferral: true,
        Victim: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(allCases), {
      status: 200,
    });
  } else {
    const allCases = await prisma.case.findMany({
      include: {
        GbvInformation: true,
        Perpetrator: true,
        serviceProvider: true,
        serviceProviderReferral: true,
        Victim: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(allCases), {
      status: 200,
    });
  }
}
