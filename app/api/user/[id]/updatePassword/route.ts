import prisma from "@/lib/prisma-client";
import { TUpdatePasswordSchema, updatePasswordSchema } from "@/schema/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/option";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  console.log("reach");
  const body: TUpdatePasswordSchema = await req.json();
  const result = updatePasswordSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      }),
      { status: 404 }
    );
  }

  const salt = 10;

  try {
    const user = await prisma.user.findFirst({
      where: { id: params.id.toString() },
    });
    const isMatch = await bcrypt.compare(
      result.data.currentPassword,
      user?.password!
    );
    if (isMatch) {
      let hashedPassword = await bcrypt.hash(
        result?.data?.newPassword.toString(),
        salt
      );
      const updateUser = await prisma.user.update({
        where: { id: params.id.toString() },
        data: { password: hashedPassword },
      });

      const session = await getServerSession(options);
      const activityLog = await prisma.activityLog.create({
        data: {
          userId: session?.user?.id as string,
          activityHeader: "Password Update",
          activityName: `Updated Password - ${user?.firstName} ${user?.lastName}`,
        },
      });
      return new Response(JSON.stringify("Updated successfully"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Wrong Password"), {
        status: 400,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
