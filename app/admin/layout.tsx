import AdminHeader from "@/components/AdminHeader";
import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/option";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  return (
    <div>
      <div className="flex justify-between items-start bg-pageBackground">
        <Sidebar role={session?.user?.role as string} />
        <div className="flex flex-col items-start justify-between gap-2 py-4 pr-2 lg:pr-4 ml-2 lg:ml-64 w-full lg:mr-4">
          <AdminHeader />
          <div className="mt-[74px] lg:mt-[88px] w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
}
