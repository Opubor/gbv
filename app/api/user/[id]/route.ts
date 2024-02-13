import prisma from "@/lib/prisma-client";
import { TEditUserSchema, editUserSchema } from "@/schema/user";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { options } from "../../auth/[...nextauth]/option";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  const body: TEditUserSchema = await req.json();
  const result = editUserSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
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
        activityHeader: "Updated staff details",
        activityName: `Updated Staff details for- ${user?.firstName} ${user?.lastName}`,
      },
    });
    return new Response(JSON.stringify("Updated successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  try {
    const user = await prisma.user.delete({
      where: { id: params.id.toString() },
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Deleted Staff",
        activityName: `Deleted Staff - ${user?.firstName} ${user?.lastName}`,
      },
    });
    return new Response(JSON.stringify("Deleted Successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
