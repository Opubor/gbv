"use client";
import { searchSchema } from "@/schema/search";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdPerson } from "react-icons/io";
import {
  PiNumberCircleOne,
  PiNumberCircleOneBold,
  PiNumberCircleThreeBold,
  PiNumberCircleTwoBold,
} from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

function Page() {
  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <div className="flex justify-center text-darkTheme items-center text-xl font-semibold bg-purple-50 py-2 rounded-t-lg mb-2">
        <TbReportSearch className="text-2xl" /> <p>Reports</p>
      </div>

      {/* Different types of reports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* ========Survivor======= */}
        <div className="bg-white shadow-lg shadow-gray-200 rounded-lg p-4">
          <div className="flex justify-start items-center text-darkTheme text-lg font-semibold gap-1">
            <PiNumberCircleOneBold />
            <p>Survivor</p>
          </div>
          <div>
            <ul className="text-sm">
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 1. New GBV Incidents reported by month{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 2. Incidents reported by type of violence{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 3. Total survivors by sex{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 4. Total survivors by age{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 5. Total survivors by age and sex{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 6. Total survivors by marital status{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 7. Total survivors with disabilities by sex{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 8. Percentage of survivors who experienced previous GBV
                </Link>{" "}
                incidents{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 9: Type of incident by time of incident{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/survivor"}>
                  Tab 10: Time between incident and disclosure{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* ========Perpetrator======= */}
        <div className="bg-white shadow-lg shadow-gray-200 rounded-lg p-4">
          <div className="flex justify-start items-center text-darkTheme text-lg font-semibold gap-1">
            <PiNumberCircleTwoBold />
            <p>Perpetrator</p>
          </div>
          <div>
            <ul className="text-sm">
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/perpetrator"}>
                  Tab 1. Number of alleged perpetrators by age{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/perpetrator"}>
                  Tab 2. Relationship of perpetrator to survivor{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* ========Referrals======= */}
        <div className="bg-white shadow-lg shadow-gray-200 rounded-lg p-4">
          <div className="flex justify-start items-center text-darkTheme text-lg font-semibold gap-1">
            <PiNumberCircleThreeBold />
            <p>Referrals</p>
          </div>
          <div>
            <ul className="text-sm">
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/referrals"}>
                  Tab 1: Incidents for which you were first point of contact{" "}
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/referrals"}>
                  Tab2: Incidents referral from other service providers
                </Link>{" "}
              </li>
              <li className="hover:bg-gray-100 p-2 shadow-md shadow-gray-200 my-2 rounded-md">
                <Link href={"/admin/reports/referrals"}>
                  Tab 3: Services provided for new incidents{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
