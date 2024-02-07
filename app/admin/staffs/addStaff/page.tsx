import React from "react";
import Form from "./Form";
import { getAllAgencies } from "@/services/agency";

async function Page() {
  const serviceProviders = await getAllAgencies();

  return <Form serviceProviders={serviceProviders} />;
}

export default Page;
