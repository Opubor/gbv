import { getUser } from "@/services/user";
import React from "react";
import { BiUserCheck } from "react-icons/bi";

type PageProps = {
  params: { id: number | string | undefined };
};

async function Page({ params }: PageProps) {
  const staff = await getUser(params.id as string);

  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-start items-start gap-4 border-b border-b-gray-300 py-3 px-8">
        <div>
          <h1 className="font-bold">
            {staff?.firstName} {staff?.lastName}
          </h1>
          <h1 className="text-gray-500 text-xs">
            ~ {staff?.role === "2" ? "Admin" : staff?.role === "1" && "Staff"}~
          </h1>
        </div>
        <div>
          <p className="bg-lime-300 text-sm py-1 px-4">Active</p>
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        <div className="flex justify-center items-center w-full">
          <BiUserCheck className="text-9xl" />
        </div>
        <div className="w-full text-sm">
          <div>
            <h1 className="text-gray-500 text-xs">First Name</h1>
            <h2 className="font-semibold">{staff?.firstName}</h2>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Last Name</h1>
            <h2 className="font-semibold">{staff?.lastName}</h2>
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Phone Number</h1>
            <h2 className="font-semibold">{staff?.phoneNumber}</h2>
          </div>
        </div>
        <div className="w-full text-sm">
          <div>
            <h1 className="text-gray-500 text-xs">E-Mail</h1>
            <h2 className="font-semibold">{staff?.email}</h2>
          </div>

          <div className="mt-4">
            <h1 className="text-gray-500 text-xs">Role</h1>
            <h2 className="font-semibold">
              {staff?.role === "2" ? "Admin" : staff?.role === "1" && "Staff"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
