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

      {/* ======GBV incidents reported by Months======= */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-2 gap-2 lg:gap-4 w-full">
        {/* ======GBV incidents reported by Months======= */}
        <div className="w-full lg:w-2/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 h-80 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600">
            GBV incidents reported by Months
          </h1>
          <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200 mt-2">
            <table className="w-full border border-black bg-white h-56">
              <thead className="text-sm text-gray-700">
                <tr>
                  <th className="border-r border-r-black" rowSpan={3}>
                    Region
                  </th>
                </tr>
                <tr>
                  <th colSpan={12}>Months</th>
                </tr>
                <tr className="border-t border-t-black">
                  <th className="border-r border-r-black">Jan</th>
                  <th className="border-r border-r-black">Febr</th>
                  <th className="border-r border-r-black">Mar</th>
                  <th className="border-r border-r-black">Apr</th>
                  <th className="border-r border-r-black">May</th>
                  <th className="border-r border-r-black">Jun</th>
                  <th className="border-r border-r-black">Jul</th>
                  <th className="border-r border-r-black">Aug</th>
                  <th className="border-r border-r-black">Sep</th>
                  <th className="border-r border-r-black">Oct</th>
                  <th className="border-r border-r-black">Nov</th>
                  <th>Dec</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Urban</td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "01"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "02"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "03"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "04"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "05"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "06"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "07"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "08"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "09"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "10"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "11"
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "12"
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Rural</td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "01"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "02"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "03"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "04"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "05"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "06"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "07"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "08"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "09"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "10"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "11"
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allCases.filter((data?) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "12"
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-2 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "01";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "02";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "03";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "04";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "05";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "06";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "07";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "08";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "09";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "10";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "11";
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allCases.filter((data: any) => {
                        return data?.registrationDate.slice(5, -3) === "12";
                      }).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* =======Total Survivors by Marital Status======== */}
        <div className="w-full lg:w-1/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 h-80 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600 text-center">
            Total Survivors by Marital Status
          </h1>

          <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200 mt-2">
            <table className="w-full border border-black bg-white h-56">
              <thead className="text-sm text-gray-700">
                <tr>
                  <th className="border-r border-r-black">Marital Status</th>
                  <th>Total No.</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Single</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Single";
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Married</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Married";
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Defacto Union</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Defacto Union";
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Widowed</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Widowed";
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Divorced</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Divorced";
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Separated</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Separated";
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Others</td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return data?.maritalStatus === "Others";
                      }).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ===Incidents reported by type of violence=== */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-2 gap-2 lg:gap-4 w-full">
        <div className="w-full lg:w-2/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600">
            Incidents reported by type of violence
          </h1>
          <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200">
            <table className="w-full border border-black bg-white">
              <thead className="text-gray-700 text-sm">
                <tr>
                  <th className="border-r border-r-black" rowSpan={3}>
                    Region
                  </th>
                </tr>
                <tr>
                  <th colSpan={8}>Type of Violence</th>
                </tr>
                <tr className="border-t border-t-black">
                  <th className="border-r border-r-black">Physical</th>
                  <th className="border-r border-r-black">Sexual</th>
                  <th className="border-r border-r-black">Emotional</th>
                  <th className="border-r border-r-black">Economic</th>
                  <th className="border-r border-r-black">Exploitaion</th>
                  <th className="border-r border-r-black">Rape</th>
                  <th className="border-r border-r-black">Forced Marriage</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Urban</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Physical"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Sexual"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Emotional/psychological"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Economic"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Exploitation"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Rape"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Forced marriage"
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Others"
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Rural</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Physical"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Sexual"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Emotional/psychological"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Economic"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Exploitation"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Rape"
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Forced marriage"
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Others"
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Physical";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Sexual";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Emotional/psychological";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Economic";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Exploitation";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Rape";
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Forced marriage";
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims.filter((data: any) => {
                        return data?.violenceType === "Others";
                      }).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===Percentage of survivors who experienced previous GBV incidents=== */}
        <div className="w-full lg:w-1/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600 text-center">
            Survivors who experienced previous GBV incidents{" "}
          </h1>
          <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200">
            <table className="w-full border border-black bg-white">
              <thead>
                <tr>
                  <th className="border-r border-r-black" rowSpan={3}>
                    Region
                  </th>
                </tr>
                <tr>
                  <th colSpan={6}>Experienced</th>
                </tr>
                <tr className="border-t border-t-black">
                  <th className="border-r border-r-black">Yes</th>
                  <th>No</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Urban</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.newClient === "Repeat"
                        );
                      }).length
                    }
                  </td>

                  <td>
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.newClient === "New"
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Rural</td>

                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.newClient === "Repeat"
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims.filter((data?) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.newClient === "New"
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-2 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>

                  <td className="border-r border-r-black">
                    {
                      allVictims.filter((data: any) => {
                        return data?.newClient === "Repeat";
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims.filter((data: any) => {
                        return data?.newClient === "New";
                      }).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
