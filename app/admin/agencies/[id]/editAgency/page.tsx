import React from "react";
import { TbUsersGroup } from "react-icons/tb";
import { MdHouseSiding } from "react-icons/md";
import EditAgencyForm from "./editAgencyForm";
import { getAgency } from "@/services/agency";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const agency = await getAgency(params.id);

  return (
    <div className="bg-white rounded-3xl mt-2 p-4">
      <div className="flex items-center gap-2 px-4 border-b border-b-themeColor mb-4">
        <MdHouseSiding /> <h1 className="text-lg font-semibold">Edit Agency</h1>
      </div>

      <EditAgencyForm agency={agency} id={agency?.id as string} />
    </div>
  );
}

export default Page;
