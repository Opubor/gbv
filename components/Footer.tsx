import { getAllAgencies } from "@/services/agency";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Footer() {
  const allAgencies = await getAllAgencies();
  return (
    <div className="bg-purple-800  p-4 xl:px-40 pb-16 pt-6">
      <div className="flex flex-col lg:flex-row justify-between items-start text-white">
        <div>
          <h1 className="text-md font-bold">Corporate address</h1>
          <h1 className="text-xs font-semibold mb-1">Address</h1>
          <p className="text-xs mb-2">{allAgencies?.at(0)?.address}</p>

          <h1 className="text-lg font-bold mt-6">Join Our Social Community</h1>
          <div className="flex items-center gap-2">
            <a href="/" target="_blank">
              <Image
                src="/facebook.png"
                alt="Facebook logo"
                className="w-8"
                width={100}
                height={0}
                priority
              />
            </a>

            <a href="/" target="_blank">
              <Image
                src="/instagram.png"
                alt="Facebook logo"
                className="w-8"
                width={100}
                height={0}
                priority
              />
            </a>

            <Image
              src="/twitter.png"
              alt="Facebook logo"
              className="w-8"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold mt-6 lg:mt-0">Call Us</h1>
          <div className="flex justify-between gap-4">
            <div className="text-xs flex flex-col">
              <a href={`tel:${allAgencies?.at(0)?.phone1}`}>
                {allAgencies?.at(0)?.phone1}
              </a>
              <a href={`tel:${allAgencies?.at(0)?.phone2}`}>
                {allAgencies?.at(0)?.phone2}
              </a>
            </div>
          </div>
          <h1 className="text-md font-bold mt-6">E-Mail</h1>
          <a className="text-xs" href={`mailto:${allAgencies?.at(0)?.email}`}>
            {allAgencies?.at(0)?.email}
          </a>
        </div>
      </div>
      <div className="mt-4 pt-2 border-t-2 border-t-white text-white">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 text-xs text-semibold">
          <Link href={"/#aboutUs"}>Terms and Conditions</Link>
        </div>
        <p className="font-semibold text-xs text-center mt-4 mb-12">
          Copyright 2023 GBV SAMOA. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
