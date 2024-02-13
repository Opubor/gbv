import { options } from "@/app/api/auth/[...nextauth]/option";
import prisma from "@/lib/prisma-client";
import { TEditProfileSchema, editProfileSchema } from "@/schema/user";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  const body: TEditProfileSchema = await req.json();
  const result = editProfileSchema.safeParse(body);

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
    const user = await prisma.user.update({
      where: { id: params.id.toString() },
      data: result.data,
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Edited Profile",
        activityName: `Edited profile - ${user?.firstName} ${user?.lastName}`,
      },
    });
    return new Response(JSON.stringify("Updated successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
