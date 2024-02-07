import prisma from "@/lib/prisma-client";
import { TCaseSchema, caseSchema } from "@/schema/case";
import { TEditGetHelpSchema, editGetHelpSchema } from "@/schema/getHelp";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<any> {
  const body: TEditGetHelpSchema = await req.json();
  const result = editGetHelpSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        error: result.error,
      }),
      { status: 404 }
    );
  }

  try {
    const getHelp = await prisma.getHelp.update({
      where: { id: params?.id },
      data: {
        contacted: result?.data?.contacted,
      },
    });

    if (getHelp) {
      return new Response(JSON.stringify("Updated Successful"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Error during update"), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify("Failed!!!"), { status: 404 });
  }
}
