import { getHelpRequest } from "@/services/getHelp";
import React from "react";
import { BiBookHeart } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const helpRequest = await getHelpRequest(params?.id as string);
  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* ==Get Help Request=== */}
        <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
          <RiContactsLine className="text-7xl text-themeColor" />
          <h1 className="font-bold text-2xl font-serif">Get Help Request</h1>
        </div>

        {/* ===Name/Email/Phone_Number=== */}
        <div>
          <div>
            <h1 className="text-md text-gray-700">Name</h1>
            <h1 className="text-md font-semibold">{helpRequest?.username}</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-md text-gray-700">Email</h1>
            <h1 className="text-md font-semibold">{helpRequest?.email}</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-md text-gray-700">Phone Number</h1>
            <h1 className="text-md font-semibold">{helpRequest?.phone}</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-md text-gray-700">Address</h1>
            <h1 className="text-md font-semibold">{helpRequest?.address}</h1>
          </div>
        </div>

        {/* ===Immediate Concern/Support Needed=== */}
        <div>
          <div>
            <h1 className="text-md text-gray-700">Immediate Concern</h1>
            <h1 className="text-md font-semibold">
              {helpRequest?.immediateDanger === true ? "Yes" : "No"}
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-md text-gray-700">Agreed to be contacted</h1>
            <h1 className="text-md font-semibold">
              {helpRequest?.contactAgreement === true ? "Yes" : "No"}
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-md text-gray-700">Support Needed</h1>
            {helpRequest?.emotionalSupport === true && (
              <h1 className="text-md font-semibold">Emotional Support</h1>
            )}
            {helpRequest?.medicalSupport === true && (
              <h1 className="text-md font-semibold">Medical Support</h1>
            )}
            {helpRequest?.legalAdvice === true && (
              <h1 className="text-md font-semibold">Legal Advice</h1>
            )}
            {helpRequest?.infoLocal === true && (
              <h1 className="text-md font-semibold">
                Information about local resources
              </h1>
            )}
            {helpRequest?.shelter === true && (
              <h1 className="text-md font-semibold">Shelter</h1>
            )}
            {helpRequest?.shelter === true && (
              <h1 className="text-md font-semibold">
                Shelter/housing Assistance
              </h1>
            )}
            {helpRequest?.otherSupport && (
              <h1 className="text-md font-semibold">
                {helpRequest?.otherSupport}
              </h1>
            )}
          </div>
        </div>
      </div>

      {/* ===Nature of Incident=== */}
      <div className="mt-4">
        <h1 className="text-md text-gray-700">
          Nature of Incident/Incident details
        </h1>
        <div className="text-md font-semibold rounded-sm bg-gray-50 border border-gray-500 p-4">
          <h1>{helpRequest?.natureOfIncident}</h1>
        </div>
      </div>

      {/* ===Safety Concerns=== */}
      <div className="mt-4">
        <h1 className="text-md text-gray-700">Safety Concerns</h1>
        <div className="text-md font-semibold rounded-sm bg-gray-50 border border-gray-500 p-4">
          <h1>{helpRequest?.safetyConcerns}</h1>
        </div>
      </div>

      {/* ===Additional Details=== */}
      <div className="mt-4">
        <h1 className="text-md text-gray-700">Additional Details</h1>
        <div className="text-md font-semibold rounded-sm bg-gray-50 border border-gray-500 p-4">
          <h1>{helpRequest?.additionalDetails}</h1>
        </div>
      </div>
    </div>
  );
}

export default Page;
