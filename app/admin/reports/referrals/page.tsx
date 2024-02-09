"use client";
import SearchReports from "@/components/SearchReports";
import { getAllAgencies } from "@/services/agency";
import { getAllCases } from "@/services/case";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbReportSearch } from "react-icons/tb";

function Page() {
  // const allCases = await getAllCases();
  // const agencies = await getAllAgencies();

  const searchParams = useSearchParams();
  const getYear = searchParams.get("year");

  const [search, setSearch] = useState("2024");
  const [loading, setLoading] = useState(false);
  const [allCases, setCases] = useState<any>();
  const [agencies, setAgencies] = useState<any>();

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

  const getAllAgencies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/agency/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      let res = await response.json();
      return setAgencies(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCases();
    getAllAgencies();
    setSearch(getYear ? getYear : "2024");
  }, [getYear]);

  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <div className="flex justify-center text-darkTheme items-center text-xl font-semibold bg-purple-50 py-2 rounded-t-lg mb-2">
        <TbReportSearch className="text-2xl" /> <p>REFERRALS</p>
      </div>

      {/* ===Select a Year=== */}
      <SearchReports />

      {/* =======All Reports====== */}
      <div>
        {/* =====Table 1======= */}
        <h1 className="mt-4 mb-1 text-sm font-semibold">
          Tab 1: Incidents for which you were first point of contact
        </h1>
        <div className="bg-yellow-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead className="text-gray-700 text-sm">
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Month
                </th>
              </tr>
              <tr>
                <th colSpan={4}>Service Providers</th>
              </tr>
              <tr className="border-t border-t-black">
                {agencies?.map((data: any) => (
                  <th key={data?.id} className="border-r border-r-black">
                    {data?.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* ===January=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">January</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "01" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===Febuary=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">Febuary</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "02" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===March=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">March</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "03" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===April=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">April</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "04" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===May=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">May</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "05" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===June=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">June</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "06" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===July=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">July</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "07" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===August=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">August</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "08" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===September=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">September</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "09" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===October=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">October</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "10" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===November=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">November</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "11" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===December=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">December</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "12" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===Total=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center font-bold">
                <td className="border-r border-r-black">Total</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderId === agency?.id &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 2======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 2. Incidents referral from other service providers
        </h1>
        <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead className="text-gray-700 text-sm">
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Month
                </th>
              </tr>
              <tr>
                <th colSpan={4}>Service Providers</th>
              </tr>
              <tr className="border-t border-t-black">
                {agencies?.map((data: any) => (
                  <th key={data?.id} className="border-r border-r-black">
                    {data?.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* ===January=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">January</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "01" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===Febuary=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">Febuary</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "02" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===March=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">March</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "03" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===April=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">April</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "04" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===May=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">May</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "05" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===June=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">June</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "06" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===July=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">July</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "07" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===August=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">August</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "08" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===September=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">September</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "09" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===October=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">October</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "10" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===November=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">November</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "11" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===December=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">December</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(5, -3) === "12" &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>

              {/* ===Total=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center font-bold">
                <td className="border-r border-r-black">Total</td>
                {agencies?.map((agency: any) => (
                  <td key={agency?.id} className="border-r border-r-black">
                    {
                      allCases?.filter((data: any) => {
                        return (
                          data?.serviceProviderReferralId === agency?.id &&
                          data?.registrationDate.slice(0, -6) === search
                        );
                      }).length
                    }
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 3======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 3. Services provided for new incidents
        </h1>
        <div className="bg-green-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead className="text-gray-700 text-sm">
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Month
                </th>
              </tr>
              <tr>
                <th colSpan={9}>Services Provided</th>
              </tr>
              <tr className="border-t border-t-black">
                <th className="border-r border-r-black">
                  Health/ Medical services
                </th>
                <th className="border-r border-r-black">Safe House/ Shelter</th>
                <th className="border-r border-r-black">
                  Psychological Services
                </th>
                <th className="border-r border-r-black">Legal Assistance</th>
                <th className="border-r border-r-black">
                  Security/ Protection
                </th>
                <th className="border-r border-r-black">
                  Livelihoods/ Vocational training
                </th>
                <th className="border-r border-r-black">Emotional Support</th>
                <th className="border-r border-r-black">
                  Information about local resources
                </th>
                <th className="border-r border-r-black">Others</th>
              </tr>
            </thead>
            <tbody>
              {/* ===January=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">January</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.shelter === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.psychological === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "01" &&
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===Febuary=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">Febuary</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "02" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===March=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">March</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "03" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===April=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">April</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "04" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===May=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">May</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "05" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===June=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">June</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "06" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===July=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">July</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "07" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===August=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">August</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "08" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===September=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">September</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "09" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===October=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">October</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "10" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===November=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">November</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "11" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
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
                        data?.GbvInformation?.at(0)?.shelter === true &&
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
                        data?.GbvInformation?.at(0)?.psychological === true &&
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
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
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
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
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
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
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
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
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
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
              </tr>

              {/* ===December=== */}
              <tr className="border-t border-t-black py-4 hover:bg-gray-50 text-center">
                <td className="border-r border-r-black">December</td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.shelter === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.psychological === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.registrationDate.slice(5, -3) === "12" &&
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 &&
                        data?.registrationDate.slice(0, -6) === search
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
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.medicalSupport === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.shelter === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.psychological === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.legalAssistance === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.securityProtection ===
                          true && data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.vocTraining === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.emotionalSupport ===
                          true && data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.infoLocal === true &&
                        data?.registrationDate.slice(0, -6) === search
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases?.filter((data: any) => {
                      return (
                        data?.GbvInformation?.at(0)?.otherSupport!?.length >
                          0 && data?.registrationDate.slice(0, -6) === search
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
  );
}

export default Page;
