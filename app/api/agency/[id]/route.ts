import prisma from "@/lib/prisma-client";
import { TAgencySchema, agencySchema } from "@/schema/agency";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { options } from "../../auth/[...nextauth]/option";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<any> {
  const body: TAgencySchema = await req.json();
  const result = agencySchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error.message,
      })
    );
  }
  try {
    const user = await prisma.agency.update({
      where: { id: params.id.toString() },
      data: result.data,
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Updated Service Provider",
        activityName: `Updated Service Provider - ${user?.name}`,
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
    const agency = await prisma.agency.delete({
      where: { id: params.id.toString() },
    });

    const session = await getServerSession(options);
    const activityLog = await prisma.activityLog.create({
      data: {
        userId: session?.user?.id as string,
        activityHeader: "Updated Service Provider",
        activityName: `Updated Service Provider - ${agency?.name}`,
      },
    });
    return new Response(JSON.stringify("Deleted Successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
