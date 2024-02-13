import { options } from "@/app/api/auth/[...nextauth]/option";
import { getAllActiviies, getMyActivites } from "@/services/activityLog";
import { getServerSession } from "next-auth";
import React from "react";
import { RiHistoryLine } from "react-icons/ri";

async function Page() {
  const session = await getServerSession(options);
  const allActivities = await getAllActiviies();
  return (
    <div className="bg-white rounded-lg py-4 w-full p-4">
      <div className="flex justify-between items-center border-b-2 border-b-black py-2">
        <div className="px-2 flex items-center gap-1">
          <RiHistoryLine />
          <h1 className="font-semibold text-sm">All staff activities</h1>
          <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
        </div>
      </div>
      {/* ===Logs=== */}
      {allActivities?.map((data: any) => (
        <div
          key={data?.id}
          className="bg-slate-50 rounded-md p-2 flex justify-between gap-2 my-3 shadow-sm shadow-gray-200"
        >
          <div className="flex items-center gap-2">
            <div className="bg-slate-300 rounded-full h-12 w-12 flex items-center justify-center">
              <RiHistoryLine className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h1 className="text-sm font-semibold">
                {data?.activityHeader} - [{data?.user?.firstName}{" "}
                {data?.user?.lastName}]
              </h1>
              <p className="text-sm">{data?.activityName}</p>
            </div>
          </div>
          <div className="flex items-end">
            <h1 className="text-xs text-slate-500 font-semibold">
              {data?.createdAt.toString()}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
