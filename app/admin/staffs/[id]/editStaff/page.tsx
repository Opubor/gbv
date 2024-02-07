import { getAllUsers, getUser } from "@/services/user";
import React from "react";
import EditStaffForm from "./EditStaffForm";
import { TbUsersGroup } from "react-icons/tb";
import { getAllAgencies } from "@/services/agency";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const staff = await getUser(params.id);
  const serviceProviders = await getAllAgencies();

  return (
    <div className="bg-white rounded-3xl mt-2 p-4">
      <div className="flex items-center gap-2 px-4 border-b border-b-themeColor mb-4">
        <TbUsersGroup /> <h1 className="text-lg font-semibold">Edit Staff</h1>
      </div>

      <EditStaffForm
        staff={staff}
        id={staff?.id as string}
        serviceProviders={serviceProviders}
      />
    </div>
  );
}

export default Page;
