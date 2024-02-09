import React, { useEffect, useState } from "react";
import Table from "@/components/table/Table";
import Thead from "@/components/table/Thead";
import Th from "@/components/table/Th";
import Tbody from "@/components/table/Tbody";
import Tr from "@/components/table/Tr";
import Td from "@/components/table/Td";
import { FcSalesPerformance } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { getAllCases } from "@/services/case";
import { getAllVictims } from "@/services/victimDetails";
import DashboardReports from "@/components/DashboardReports";

async function Page() {
  const allCases = await getAllCases();
  const allVictims = await getAllVictims();

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-2 lg:gap-4 lg:mt-1">
        <div className="w-full lg:w-1/3 bg-white rounded-3xl h-36 shadow-md shadow-gray-200 flex  justify-center items-center gap-4 border border-gray-300">
          <div>
            <FaBook size={50} className="text-themeColor" />
          </div>
          <div>
            <h1 className="text-gray-400 text-md mb-2">Number of Cases</h1>
            <h2 className="text-2xl font-extrabold">{allCases?.length}</h2>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-3xl h-36 shadow-md shadow-gray-200 flex justify-center items-center gap-4 border border-gray-300">
          <div>
            <FaPeopleGroup size={50} className="text-themeColor" />
          </div>
          <div>
            <h1 className="text-gray-400 text-md mb-2">
              Number of Cases(Rural)
            </h1>
            <h2 className="text-2xl font-extrabold">
              {
                allCases.filter((data: any) => {
                  return data?.region === "Rural";
                }).length
              }
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-3xl h-36 shadow-md shadow-gray-200 flex justify-center items-center gap-4 border border-gray-300">
          <div>
            <FaPeopleGroup size={50} className="text-themeColor" />
          </div>
          <div>
            <h1 className="text-gray-400 text-md mb-2">
              Number of Cases(Urban)
            </h1>
            <h2 className="text-2xl font-extrabold">
              {
                allCases.filter((data: any) => {
                  return data?.region === "Urban";
                }).length
              }
            </h2>
          </div>
        </div>
      </div>
      <DashboardReports />
    </>
  );
}

export default Page;
