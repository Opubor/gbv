"use client";
import SearchReports from "@/components/SearchReports";
import { getAllCases } from "@/services/case";
import { getAllPerpetrators } from "@/services/perpetratorDetails";
import { getAllVictims } from "@/services/victimDetails";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlinePrint } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import ReactToPrint from "react-to-print";

function Page() {
  const searchParams = useSearchParams();
  const getYear = searchParams.get("year");

  const [search, setSearch] = useState("2024");
  const [loading, setLoading] = useState(false);
  const [allPerpetrators, setAllPerpetrators] = useState();
  const [allVictims, setAllVictims] = useState();

  const getAllVictims = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/victimDetails/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      let res = await response.json();
      console.log(res);
      return setAllVictims(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllPerpetrators = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/perpetratorDetails/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      let res = await response.json();
      console.log(res);
      return setAllPerpetrators(res);
    } catch (error) {
      console.log(error);
    }
  };
  const componentRef = useRef();

  useEffect(() => {
    getAllVictims();
    getAllPerpetrators();
    setSearch(getYear ? getYear : "2024");
  }, [getYear]);

  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <div className="flex justify-center text-darkTheme items-center text-xl font-semibold bg-purple-50 py-2 rounded-t-lg mb-2">
        <TbReportSearch className="text-2xl" /> <p>PERPETRATOR REPORTS</p>
      </div>

      {/* ===Select a Year=== */}
      <SearchReports />

      {/* =======All Reports====== */}
      <div>
        <ReactToPrint
          trigger={() => {
            return (
              <div className="flex justify-end px-8">
                <button className="bg-lime-600 px-8 py-1.5 rounded-md text-sm text-white flex items-center justify-center gap-1">
                  <MdOutlinePrint /> Print Reports
                </button>
              </div>
            );
          }}
          documentTitle={`Perpetrator Reports (${search})`}
          pageStyle={"Print"}
          content={() => componentRef.current}
        />
        <div ref={componentRef}>
          {/* =====Table 1======= */}
          <h1 className="mt-4 mb-1 text-sm font-semibold">
            Tab 1. Number of alleged perpetrators by age{" "}
          </h1>
          <div className="bg-yellow-300 rounded-lg p-4 shadow-md shadow-gray-200">
            <table className="w-full border border-black bg-white">
              <thead>
                <tr>
                  <th className="border-r border-r-black" rowSpan={3}>
                    Region
                  </th>
                </tr>
                <tr>
                  <th colSpan={4}>Age</th>
                </tr>
                <tr className="border-t border-t-black">
                  <th className="border-r border-r-black">Under 18</th>
                  <th className="border-r border-r-black">18-24</th>
                  <th className="border-r border-r-black">25-39</th>
                  <th className="border-r border-r-black">40-49</th>
                  <th className="border-r border-r-black">50-59</th>
                  <th>60+</th>
                </tr>
              </thead>
              <tbody>
                {/* ===Urban=== */}
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Urban</td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.age === "Under 18" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.age === "18-24" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.age === "25-39" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.age === "40-49" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.age === "50-59" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.age === "60+" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                {/* ===Rural=== */}
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Rural</td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.age === "Under 18" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.age === "18-24" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.age === "25-39" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.age === "40-49" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.age === "50-59" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.age === "60+" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                {/* ===Total=== */}
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.age === "Under 18" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.age === "18-24" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.age === "25-39" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.age === "40-49" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.age === "50-59" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allPerpetrators?.filter((data) => {
                        return (
                          data?.age === "60+" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* =====Table 2======= */}
          <h1 className="mt-8 mb-1 text-sm font-semibold">
            Tab 2. Relationship of perpetrator to survivor{" "}
          </h1>
          <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200">
            <table className="w-full border border-black bg-white">
              <thead>
                <tr>
                  <th className="border-r border-r-black" rowSpan={3}>
                    Relationship
                  </th>
                </tr>
                <tr>
                  <th colSpan={8}>Region</th>
                </tr>
                <tr className="border-t border-t-black">
                  <th className="border-r border-r-black">Urban</th>
                  <th className="border-r border-r-black">Rural</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    CURRENT male partner
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "CURRENT male partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "CURRENT male partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "CURRENT male partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">PAST male partner</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "PAST male partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "PAST male partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "PAST male partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    CURRENT female partner
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "CURRENT female partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "CURRENT female partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "CURRENT female partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    PAST female partner
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "PAST female partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "PAST female partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "PAST female partner" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Mother/ step-mother/ adoptive mother
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Mother/ step-mother/ adoptive mother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Mother/ step-mother/ adoptive mother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Mother/ step-mother/ adoptive mother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Father/ step-father/ adoptive father
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Father/ step-father/ adoptive father" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Father/ step-father/ adoptive father" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Father/ step-father/ adoptive father" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Father-in-law</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Father-in-law" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Father-in-law" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Father-in-law" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Mother-in-law</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Mother-in-law" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Mother-in-law" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Mother-in-law" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Aunt</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship === "Aunt" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship === "Aunt" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship === "Aunt" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Uncle</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship === "Uncle" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship === "Uncle" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship === "Uncle" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Brother</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship === "Brother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship === "Brother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship === "Brother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Sister</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship === "Sister" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship === "Sister" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship === "Sister" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Grandmother</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Grandmother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Grandmother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Grandmother" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Grandfather</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Grandfather" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Grandfather" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Grandfather" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Other relative male
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Other relative male" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Other relative male" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Other relative male" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Other relative female
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Other relative female" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Other relative female" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Other relative female" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Community leader</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Community leader" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Community leader" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Community leader" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Faith leader</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Faith leader" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Faith leader" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Faith leader" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Work colleague</td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Work colleague" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Work colleague" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Work colleague" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Supervisor/ Employer
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Supervisor/ Employer" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Supervisor/ Employer" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Supervisor/ Employer" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Teacher/ School official
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Teacher/ School official" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Teacher/ School official" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Teacher/ School official" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">School friend</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "School friend" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "School friend" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "School friend" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Service Provider/ shop keeper
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Service Provider/ shop keeper" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Service Provider/ shop keeper" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {" "}
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Service Provider/ shop keeper" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Family friend/ Neighbour
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Family friend/ Neighbour" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Family friend/ Neighbour" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Family friend/ Neighbour" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">
                    Other community member
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Other community member" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Other community member" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Other community member" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Stranger</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Stranger" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "Stranger" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "Stranger" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">No relation</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship ===
                            "No relation" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship ===
                            "No relation" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship ===
                            "No relation" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                  <td className="border-r border-r-black">Others</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.perpetratorSurvivorRelationship === "Others" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.perpetratorSurvivorRelationship === "Others" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="font-bold">
                    {
                      allVictims?.filter((data) => {
                        return (
                          data?.perpetratorSurvivorRelationship === "Others" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
