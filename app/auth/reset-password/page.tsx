import prisma from "@/lib/prisma-client";
import React from "react";
import ForgotPassword from "../forgot-password/page";
import ResetPasswordForm from "./ResetPasswordForm";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}
async function Page({ searchParams }: Props) {
  if (searchParams?.token) {
    const user = await prisma.user.findUnique({
      where: {
        resetPasswordToken: searchParams?.token as string,
      },
    });

    if (!user) {
      return <div> Invalid token</div>;
    }

    return <ResetPasswordForm token={searchParams?.token as string} />;
    // return <ResetPasswordForm userId={user?.id} />;
  } else {
    return <ForgotPassword />;
  }
  return <div>Page</div>;
}

export default Page;
