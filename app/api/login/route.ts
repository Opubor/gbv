import prisma from "@/lib/prisma-client";
import { loginUserSchema, TLoginUserSchema } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/option";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TLoginUserSchema = await req.json();
  const result = loginUserSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      }),
      { status: 404 }
    );
  }

  const user = await prisma.user.findFirst({
    where: { email: result?.data?.email },
  });

  if (user) {
    const isMatch = await bcrypt.compare(
      result?.data?.password.toString(),
      user?.password
    );
    if (isMatch) {
      const activityLog = await prisma.activityLog.create({
        data: {
          userId: user?.id as string,
          activityHeader: "Log In",
          activityName: `Login successful - ${user?.firstName} ${user?.lastName}`,
        },
      });
      return new Response(JSON.stringify(user), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Invalid credentials"), {
        status: 404,
      });
    }
  } else {
    return new Response(JSON.stringify("User not found"), {
      status: 404,
    });
  }
}
