import PageName from "@/components/PageName";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import SecurityForm from "./SecurityForm";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/option";

async function Page() {
  const session = await getServerSession(options);
  return (
    <div>
      <PageName
        page1="Update Profile"
        page2="Security"
        page1Link="/admin/settings"
        page2Link="/admin/settings/security"
      />

      <div className="bg-white rounded-xl">
        <div className="border-b-2 border-b-pageBackground flex justify-start items-center gap-2 py-4 px-6">
          <AiOutlineSetting size={20} className="text-gray-800" />

          <h1 className="text-lg lg:text-xl font-bold text-gray-800">
            Security
          </h1>
        </div>

        <SecurityForm id={session?.user?.id as string} />
      </div>
    </div>
  );
}

export default Page;
