import { getAllAgencies } from "@/services/agency";
import { getAllVictims } from "@/services/victimDetails";
import Link from "next/link";
import React from "react";
import { CiLocationArrow1, CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

async function OurAgencies() {
  const allAgencies = await getAllAgencies();

  return (
    <div className="py-12 lg:py-16 px-2 lg:px-28 bg-purple-50">
      <div className="flex items-center">
        <div className="border-t border-gray-400 flex-grow"></div>
        <div className="text-xl lg:text-3xl text-center font-bold mx-1">
          Contact Our <span className="text-purple-600">Service Providers</span>
        </div>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>
      <p className="text-gray-500 text-xs lg:text-sm text-center my-1">
        Reach Out for Support{" "}
      </p>

      {allAgencies.map((data: any) => (
        <div key={data?.id} className="grid grid-cols-1 lg:grid-cols-3 mb-4">
          <div className="col-span-1 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')] bg-cover"></div>
          <div className="col-span-2 bg-white p-4 shadow-md shadow-gray-200">
            {/* ===header/nav=== */}
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-2">
              <div className="flex items-center justify-start gap-2">
                <div className="h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hands.jpg')] bg-cover"></div>
                <h1 className="text-md lg:text-lg font-bold">{data?.name}</h1>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <a
                  href={`tel:${data?.phone1}`}
                  className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-purple-400"
                >
                  <IoCallOutline />
                </a>
                <a
                  href={`tel:${data?.phone2}`}
                  className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-blue-400"
                >
                  <IoCallOutline />
                </a>
                <a
                  href={`https://wa.me/${data?.phone1}`}
                  className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-green-400"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={`mailto:${data?.email}`}
                  className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-red-400"
                >
                  <CiMail />
                </a>
              </div>
            </div>

            {/* ===Founded/about=== */}

            {/* ===Address and contacts=== */}
            <div className="mt-4">
              <div className="grid gid-cols-1 lg:grid-cols-2 px-1 lg:px-2 py-4 gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${data?.phone1}`}
                    className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-purple-400"
                  >
                    <IoCallOutline />
                  </a>
                  <h1 className="text-sm">{data?.phone1}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${data?.phone1}`}
                    className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-green-400"
                  >
                    <FaWhatsapp />
                  </a>
                  <h1 className="text-sm">{data?.phone1}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${data?.phone2}`}
                    className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-blue-400"
                  >
                    <IoCallOutline />
                  </a>
                  <h1 className="text-sm">{data?.phone2}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${data?.email}`}
                    className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-red-400"
                  >
                    <CiMail />
                  </a>
                  <h1 className="text-sm">{data?.email}</h1>
                </div>
              </div>

              <div className="flex items-center gap-2 px-1 lg:px-2">
                <h1 className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex justify-center items-center bg-red-400">
                  <IoLocationOutline />
                </h1>
                <h1 className="text-sm">
                  {data?.address} - {data?.city}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurAgencies;
