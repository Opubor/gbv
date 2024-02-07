import { getAgency } from "@/services/agency";
import { getUser } from "@/services/user";
import React from "react";
import { BiUserCheck } from "react-icons/bi";
import { MdHouseSiding } from "react-icons/md";

type PageProps = {
  params: { id: number | string | undefined };
};

async function Page({ params }: PageProps) {
  const agency = await getAgency(params.id as string);

  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-start items-start gap-4 border-b border-b-gray-300 py-3 px-8">
        <div>
          <h1 className="font-bold">{agency?.name}</h1>
          {/* <h1 className="text-gray-500 text-xs">~ {agency?.branch}~</h1> */}
        </div>
        {/* <div>
          <p className="bg-lime-300 text-sm py-1 px-4">Active</p>
        </div> */}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start p-4">
        <div className="flex justify-center items-center w-full">
          <MdHouseSiding className="text-9xl" />
        </div>
        <div className="w-full text-sm">
          <div>
            <h1 className="text-gray-500 text-xs">Service Provider</h1>
            <h2 className="font-semibold">{agency?.name}</h2>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Email</h1>
            <h2 className="font-semibold">{agency?.email}</h2>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Phone Number 1</h1>
            <h2 className="font-semibold">{agency?.phone1}</h2>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Phone Number 2</h1>
            <h2 className="font-semibold">{agency?.phone2}</h2>
          </div>
        </div>
        <div className="w-full text-sm">
          {/* <div>
            <h1 className="text-gray-500 text-xs">Branch</h1>
            <h2 className="font-semibold">{agency?.branch}</h2>
          </div> */}

          <div>
            <h1 className="text-gray-500 text-xs">City</h1>
            <h2 className="font-semibold">{agency?.city}</h2>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Address</h1>
            <h2 className="font-semibold">{agency?.address}</h2>
          </div>
          {/* <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Founded</h1>
            <h2 className="font-semibold">{agency?.founded}</h2>
          </div> */}
        </div>
      </div>

      {/* <div className="p-4">
        <h1 className="text-md font-semibold">-About {agency?.name}</h1>
        <p className="text-sm">{agency?.about}</p>
      </div> */}
    </div>
  );
}

export default Page;
