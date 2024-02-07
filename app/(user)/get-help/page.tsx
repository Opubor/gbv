import GetHelpForm from "@/components/GetHelpForm";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

function Page() {
  return (
    <div className="py-12 lg:py-16 px-2 lg:px-28 bg-gray-50" id="#getHelp">
      <div className="flex items-center gap-1 mb-4">
        <FaHandHoldingHeart className="text-2xl" />
        <h1 className="font-bold text-2xl">
          Get Help Form - Support and Assistance Request
        </h1>
      </div>
      <GetHelpForm />
    </div>
  );
}

export default Page;
