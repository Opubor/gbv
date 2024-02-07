import prisma from "@/lib/prisma-client";
import { registerUserSchema, TRegisterUserSchema } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { agencySchema, TAgencySchema } from "@/schema/agency";
import { caseSchema, TCaseSchema } from "@/schema/case";
import { randomBytes } from "crypto";
import { getHelpSchema, TGetHelpSchema } from "@/schema/getHelp";
import { Resend } from "resend";
import ResetPasswordReciept from "@/email/reset-password";
import React from "react";
import GetHelpRequest from "@/email/getHelpRequest";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TGetHelpSchema = await req.json();
  const result = getHelpSchema.safeParse(body);
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
    const date = new Date();

    const getHelpRequest = await prisma.getHelp.create({
      data: {
        address: result?.data?.address,
        email: result?.data?.email,
        phone: result?.data?.phone,
        username: result?.data?.username,
        additionalDetails: result?.data?.additionalDetails,
        contactAgreement: result?.data?.contactAgreement,
        emotionalSupport: result?.data?.emotionalSupport,
        immediateDanger: result?.data?.immediateDanger,
        infoLocal: result?.data?.infoLocal,
        legalAdvice: result?.data?.legalAdvice,
        medicalSupport: result?.data?.medicalSupport,
        natureOfIncident: result?.data?.natureOfIncident,
        otherSupport: result?.data?.otherSupport,
        safetyConcerns: result?.data?.safetyConcerns,
        shelter: result?.data?.shelter,
        date: date.toString(),
      },
    });

    await resend.emails.send({
      from: "GBV <onboarding@resend.dev>",
      to: process.env.PERSONAL_EMAIL!,
      subject: "New Get Help Request Received",
      react: React.createElement(GetHelpRequest, {
        id: getHelpRequest?.id,
        userName: getHelpRequest?.username,
        userEmail: getHelpRequest?.email,
        userPhoneNumber: getHelpRequest?.phone,
        address: getHelpRequest?.address,
        date: getHelpRequest?.date!,
        dangerStatus: getHelpRequest?.immediateDanger === true ? "Yes" : "No",
        contactAgreement:
          getHelpRequest?.contactAgreement === true ? "Yes" : "No",
      }),
    });

    if (getHelpRequest) {
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
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search");

  if (search || search !== "") {
    const allCases = await prisma.getHelp.findMany({
      where: { username: { contains: search?.toString() } },

      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(allCases), {
      status: 200,
    });
  } else {
    const allCases = await prisma.getHelp.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return new Response(JSON.stringify(allCases), {
      status: 200,
    });
  }
}
