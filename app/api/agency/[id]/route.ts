import prisma from "@/lib/prisma-client";
import { TAgencySchema, agencySchema } from "@/schema/agency";
import { NextRequest } from "next/server";

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
    await prisma.agency.delete({
      where: { id: params.id.toString() },
    });
    return new Response(JSON.stringify("Deleted Successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
