import React from "react";
import { getCase } from "@/services/case";
import EditForm from "./EditForm";
import { getAllAgencies } from "@/services/agency";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const serviceProvider = await getCase(params.id);
  const agencies = await getAllAgencies();
  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-4 lg:mt-2">
        <div>
          <div className="bg-themeColor px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-white">
            Edit Service Provider Details
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 w-full">
        <div className="bg-purple-50 p-2 rounded-t-md">
          <h1 className="text-md font-semibold">
            CASE ID - {serviceProvider?.caseId}
          </h1>
        </div>
        <EditForm serviceProvider={serviceProvider} agencies={agencies} />
      </div>
    </div>
  );
}

export default Page;
