import Link from "next/link";
import React from "react";

import Form from "./Form";
import { getAllAgencies } from "@/services/agency";

async function Page() {
  const serviceProviders = await getAllAgencies();
  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-4 lg:mt-2">
        <div>
          <div className="bg-themeColor px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-white">
            Service Providers
          </div>
        </div>
      </div>

      <Form serviceProviders={serviceProviders} />
    </div>
  );
}

export default Page;
