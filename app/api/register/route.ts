import prisma from "@/lib/prisma-client";
import { registerUserSchema, TRegisterUserSchema } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
  const body: TRegisterUserSchema = await req.json();
  const result = registerUserSchema.safeParse(body);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }

  const salt = 10;

  try {
    const usedEmail = await prisma.user.findFirst({
      where: { email: result.data.email },
    });

    if (usedEmail) {
      return new Response(JSON.stringify("Email is already in use"), {
        status: 400,
      });
    } else {
      const hash = bcrypt.hashSync(result.data.password, salt);

      const user = await prisma.user.create({
        data: {
          firstName: result?.data?.firstName,
          lastName: result?.data?.lastName,
          email: result?.data?.email,
          role: result?.data?.role,
          phoneNumber: result?.data?.phoneNumber,
          gender: result?.data?.gender,
          password: hash,
          branch: result?.data?.branch,
        },
      });

      return new Response(JSON.stringify("Registration Successful"), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
