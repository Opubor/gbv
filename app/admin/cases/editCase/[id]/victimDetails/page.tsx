import Link from "next/link";
import React from "react";
import { GrChapterNext } from "react-icons/gr";
import { getCase } from "@/services/case";
import { getVictimDetails } from "@/services/victimDetails";
import EditForm from "./EditForm";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const victimDetails = await getVictimDetails(params.id);

  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-4 lg:mt-2">
        <div>
          <div className="bg-themeColor px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-white">
            Edit Victim Details
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 w-full">
        <div className="bg-purple-50 p-2 rounded-t-md">
          <h1 className="text-md font-semibold">
            CASE ID - {victimDetails?.case?.caseId}
          </h1>
        </div>
        <EditForm victimDetails={victimDetails} />
      </div>
    </div>
  );
}

export default Page;
