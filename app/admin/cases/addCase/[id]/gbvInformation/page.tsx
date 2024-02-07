import { getCase } from "@/services/case";
import Link from "next/link";
import React from "react";
import { GrChapterNext } from "react-icons/gr";
import GbvInfoForm from "./GbvInfoForm";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const serviceProvider = await getCase(params.id);

  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-4 lg:mt-2">
        <div>
          <Link
            href={"/admin/cases/addCase/victimDetails"}
            className="bg-themeColor px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-white"
          >
            GBV Information
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 w-full">
        <div className="bg-purple-50 p-2 rounded-t-md">
          <h1 className="text-md font-semibold">
            CASE ID - {serviceProvider?.caseId}
          </h1>
        </div>
        <GbvInfoForm id={serviceProvider?.id} />
      </div>
    </div>
  );
}

export default Page;
