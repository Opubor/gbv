import { options } from "@/app/api/auth/[...nextauth]/option";
import PageName from "@/components/PageName";
import { getServerSession } from "next-auth";
import React from "react";
import { BsPersonGear } from "react-icons/bs";
import ProfileForm from "./ProfileForm";
import { getUser } from "@/services/user";

async function Page() {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id as string);
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
          <BsPersonGear size={20} className="text-gray-800" />
          <h1 className="text-lg lg:text-xl font-bold text-gray-800">
            Personal Information
          </h1>
        </div>

        <ProfileForm user={user} id={session?.user?.id as string} />
      </div>
    </div>
  );
}

export default Page;
