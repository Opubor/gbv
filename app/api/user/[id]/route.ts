import prisma from "@/lib/prisma-client";
import { TEditUserSchema, editUserSchema } from "@/schema/user";
import { NextRequest } from "next/server";

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
    await prisma.user.delete({
      where: { id: params.id.toString() },
    });
    return new Response(JSON.stringify("Deleted Successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
