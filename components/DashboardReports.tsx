"use client";
import { getAllCases } from "@/services/case";
import { getAllVictims } from "@/services/victimDetails";
import React, { useEffect, useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import SearchReports from "./SearchReports";
import { useSearchParams } from "next/navigation";

function DashboardReports() {
  //   const allCases = await getAllCases();
  //   const allVictims = await getAllVictims();

  const searchParams = useSearchParams();
  const getYear = searchParams.get("year");

  const [search, setSearch] = useState("2024");
  const [loading, setLoading] = useState(false);
  const [allCases, setCases] = useState<any>();
  const [allVictims, setAllVictims] = useState<any>();

  const getAllCases = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/case/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      let res = await response.json();
      return setCases(res);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getAllCases();
    getAllVictims();
    setSearch(getYear ? getYear : "2024");
  }, [getYear]);

  return (
    <>
      <div className="bg-white rounded-lg p-4 w-full mt-4">
        <div className="flex justify-center text-darkTheme items-center text-xl font-semibold bg-purple-50 py-2 rounded-t-lg mb-2">
          <TbReportSearch className="text-2xl" /> <p>REPORTS</p>
        </div>
      </div>

      {/* ===Select a Year=== */}
      <div className="pt-2">
        <SearchReports />
      </div>
      {/* ======GBV incidents reported by Months======= */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-2 gap-2 lg:gap-4 w-full">
        {/* ======GBV incidents reported by Months======= */}
        <div className="w-full lg:w-2/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 h-80 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600">
            GBV incidents reported by Months
          </h1>
          <div className="bg-purple-300 rounded-lg p-4 shadow-md shadow-gray-200 mt-2">
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
                  <th className="border-r border-r-black">January</th>
                  <th className="border-r border-r-black">Febuary</th>
                  <th className="border-r border-r-black">March</th>
                  <th className="border-r border-r-black">April</th>
                  <th className="border-r border-r-black">May</th>
                  <th className="border-r border-r-black">June</th>
                  <th className="border-r border-r-black">July</th>
                  <th className="border-r border-r-black">August</th>
                  <th className="border-r border-r-black">September</th>
                  <th className="border-r border-r-black">October</th>
                  <th className="border-r border-r-black">November</th>
                  <th>December</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Urban</td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "01" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "02" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                    {/* {search} */}
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "03" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "04" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "05" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "06" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "07" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "08" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "09" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "10" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "11" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Urban" &&
                          data?.registrationDate.slice(5, -3) === "12" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Rural</td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "01" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "02" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "03" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "04" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "05" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "06" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "07" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "08" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "09" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "10" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "11" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.region === "Rural" &&
                          data?.registrationDate.slice(5, -3) === "12" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "01" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "02" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "03" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "04" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "05" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "06" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "07" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "08" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "09" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "10" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "11" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.registrationDate.slice(5, -3) === "12" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
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
          <div className="bg-purple-300 rounded-lg p-4 shadow-md shadow-gray-200 mt-2">
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
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Single" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Married</td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Married" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Defacto Union</td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Defacto Union" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Widowed</td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Widowed" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Divorced</td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Divorced" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Separated</td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Separated" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Others</td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.maritalStatus === "Others" &&
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

      {/* ===Incidents reported by type of violence=== */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-2 gap-2 lg:gap-4 w-full">
        <div className="w-full lg:w-2/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600">
            Incidents reported by type of violence
          </h1>
          <div className="bg-purple-300 rounded-lg p-4 shadow-md shadow-gray-200">
            <table className="w-full border border-black bg-white">
              <thead className="text-sm text-gray-700">
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
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Physical" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Sexual" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Emotional/psychological" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Economic" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Exploitation" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Rape" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Forced marriage" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.violenceType === "Others" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Rural</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Physical" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Sexual" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Emotional/psychological" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Economic" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Exploitation" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Rape" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Forced marriage" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.violenceType === "Others" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>

                <tr className="border-t border-t-black py-2 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Physical" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Sexual" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Emotional/psychological" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Economic" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Exploitation" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Rape" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Forced marriage" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.violenceType === "Others" &&
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

        {/* ===Percentage of survivors who experienced previous GBV incidents=== */}
        <div className="w-full lg:w-1/3 rounded-3xl bg-white shadow-lg shadow-gray-200 p-4 border border-gray-300">
          <h1 className="text-sm font-bold text-gray-600 text-center">
            Survivors who experienced previous GBV incidents{" "}
          </h1>
          <div className="bg-purple-300 rounded-lg p-4 shadow-md shadow-gray-200">
            <table className="w-full border border-black bg-white">
              <thead className="text-sm text-gray-700">
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
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.newClient === "Repeat" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>

                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Urban" &&
                          data?.newClient === "New" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-2 text-center">
                  <td className="border-r border-r-black">Rural</td>

                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.newClient === "Repeat" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.case?.region === "Rural" &&
                          data?.newClient === "New" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                </tr>
                <tr className="border-t border-t-black py-2 text-center font-bold">
                  <td className="border-r border-r-black">Total</td>

                  <td className="border-r border-r-black">
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.newClient === "Repeat" &&
                          data?.case?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                  <td>
                    {
                      allVictims?.filter((data: any) => {
                        return (
                          data?.newClient === "New" &&
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
    </>
  );
}

export default DashboardReports;
