import { getAllCases } from "@/services/case";
import { getAllVictims } from "@/services/victimDetails";
import React from "react";
import { TbReportSearch } from "react-icons/tb";

async function Page() {
  const allCases = await getAllCases();
  const allVictims = await getAllVictims();
  // let date1 = new Date("01/16/2024");
  // let date2 = new Date("01/26/2024");

  // let Difference_In_Time = date2.getTime() - date1.getTime();

  // let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  // console.log(Difference_In_Days);
  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <div className="flex justify-center text-darkTheme items-center text-xl font-semibold bg-purple-50 py-2 rounded-t-lg mb-2">
        <TbReportSearch className="text-2xl" /> <p>SURVIVOR REPORTS</p>
      </div>

      {/* =======All Reports====== */}
      <div>
        {/* =====Table 1======= */}
        <h1 className="mt-4 mb-1 text-sm font-semibold">
          Tab 1. New GBV Incidents reported by month{" "}
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
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "01"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "02"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "03"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "04"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "05"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "06"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "07"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "08"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "09"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "10"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.registrationDate.slice(5, -3) === "11"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
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
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "01"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "02"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "03"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "04"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "05"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "06"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "07"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "08"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "09"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "10"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.registrationDate.slice(5, -3) === "11"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
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

        {/* =====Table 2======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 2. Incidents reported by type of violence{" "}
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
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Physical"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Sexual"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Emotional/psychological"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Economic"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Exploitation"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Rape"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.violenceType === "Forced marriage"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
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
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Physical"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Sexual"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Emotional/psychological"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Economic"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Exploitation"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Rape"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.violenceType === "Forced marriage"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
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

        {/* =====Table 3======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 3. Total survivors by sex{" "}
        </h1>
        <div className="bg-orange-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Region
                </th>
              </tr>
              <tr>
                <th colSpan={2}>Sex</th>
              </tr>
              <tr className="border-t border-t-black">
                <th className="border-r border-r-black">Male</th>
                <th className="border-r border-r-black">Female</th>
                <th className="border-r border-r-black">Trans</th>
                <th>Not Disclosed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Urban</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.sex === "Male"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.sex === "Female"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.sex === "Trans"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.sex === "Not disclosed"
                      );
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Rural</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.sex === "Male"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.sex === "Female"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.sex === "Trans"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.sex === "Not disclosed"
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
                      return data?.sex === "Male";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Not disclosed";
                    }).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 4======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 4. Total survivors by age{" "}
        </h1>
        <div className="bg-blue-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Region
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Age</th>
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
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Urban</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.age === "Under 18"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.age === "18-24"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.age === "25-39"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.age === "40-49"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.age === "50-59"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" && data?.age === "60+"
                      );
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Rural</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.age === "Under 18"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.age === "18-24"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.age === "25-39"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.age === "40-49"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.age === "50-59"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" && data?.age === "60+"
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
                      return data?.age === "Under 18";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "18-24";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "25-39";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "40-49";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "50-59";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "60+";
                    }).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 5======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 5. Total survivors by age and sex{" "}
        </h1>
        <div className="bg-lime-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Sex
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Age</th>
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
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Male</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Male" && data?.age === "Under 18";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Male" && data?.age === "18-24";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Male" && data?.age === "25-39";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Male" && data?.age === "40-49";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Male" && data?.age === "50-59";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Male" && data?.age === "60+";
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Female</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female" && data?.age === "Under 18";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female" && data?.age === "18-24";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female" && data?.age === "25-39";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female" && data?.age === "40-49";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female" && data?.age === "50-59";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Female" && data?.age === "60+";
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Trans</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans" && data?.age === "Under 18";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans" && data?.age === "18-24";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans" && data?.age === "25-39";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans" && data?.age === "40-49";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans" && data?.age === "50-59";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.sex === "Trans" && data?.age === "60+";
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Not Disclosed</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.age === "Under 18"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" && data?.age === "18-24"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" && data?.age === "25-39"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" && data?.age === "40-49"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" && data?.age === "50-59"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" && data?.age === "60+"
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
                      return data?.age === "Under 18";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "18-24";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "25-39";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "40-49";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "50-59";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.age === "60+";
                    }).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 6======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 6. Total survivors by marital status{" "}
        </h1>
        <div className="bg-slate-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Sex
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Marital Status</th>
              </tr>
              <tr className="border-t border-t-black">
                <th className="border-r border-r-black">Single</th>
                <th className="border-r border-r-black">Married</th>
                <th className="border-r border-r-black">De-facto Union</th>
                <th className="border-r border-r-black">Widowed</th>
                <th className="border-r border-r-black">Divorced</th>
                <th className="border-r border-r-black">Separated</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Male</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" && data?.maritalStatus === "Single"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" &&
                        data?.maritalStatus === "Married"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" &&
                        data?.maritalStatus === "Defacto Union"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" &&
                        data?.maritalStatus === "Widowed"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" &&
                        data?.maritalStatus === "Divorced"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" &&
                        data?.maritalStatus === "Separated"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Male" && data?.maritalStatus === "Others"
                      );
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Female</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Single"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Married"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Defacto Union"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Widowed"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Divorced"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Separated"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Female" &&
                        data?.maritalStatus === "Others"
                      );
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Trans</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Single"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Married"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Defacto Union"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Widowed"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Divorced"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Separated"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Trans" &&
                        data?.maritalStatus === "Others"
                      );
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Not disclosed</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Single"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Married"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Defacto Union"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Widowed"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Divorced"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Separated"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.sex === "Not disclosed" &&
                        data?.maritalStatus === "Others"
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
                      return data?.maritalStatus === "Single";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.maritalStatus === "Married";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.maritalStatus === "Defacto Union";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.maritalStatus === "Widowed";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.maritalStatus === "Divorced";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.maritalStatus === "Separated";
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.maritalStatus === "Others";
                    }).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 7======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 7. Total survivors with disabilities by sex{" "}
        </h1>
        <div className="bg-purple-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Region
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Sex</th>
              </tr>
              <tr className="border-t border-t-black">
                <th className="border-r border-r-black">Male</th>
                <th className="border-r border-r-black">Female</th>
                <th className="border-r border-r-black">Trans</th>
                <th>Not disclosed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Urban</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Male"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Female"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Trans"
                      );
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Not disclosed"
                      );
                    }).length
                  }
                </td>
              </tr>
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Rural</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Male"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Female"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Trans"
                      );
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.disabled === "Yes" &&
                        data?.sex === "Not disclosed"
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
                      return data?.disabled === "Yes" && data?.sex === "Male";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.disabled === "Yes" && data?.sex === "Female";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.disabled === "Yes" && data?.sex === "Trans";
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.disabled === "Yes" &&
                        data?.sex === "Not disclosed"
                      );
                    }).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 8======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 8. Percentage of survivors who experienced previous GBV incidents{" "}
        </h1>
        <div className="bg-red-300 rounded-lg p-4 shadow-md shadow-gray-200">
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
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.newClient === "Repeat"
                      );
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
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
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.newClient === "Repeat"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allVictims.filter((data: any) => {
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

        {/* =====Table 9======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 9: Type of incident by time of incident
        </h1>
        <div className="bg-indigo-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Region
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Time of the Incident</th>
              </tr>
              <tr className="border-t border-t-black">
                <th className="border-r border-r-black">Morning</th>
                <th className="border-r border-r-black">Afternoon</th>
                <th className="border-r border-r-black">Evening/Night</th>
                <th className="border-r border-r-black">Not Stated</th>
                <th>Not Applicable</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Urban</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.incidentTime === "Morning"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.incidentTime === "Afternoon"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.incidentTime === "Evening/Night"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.incidentTime === "Not Stated"
                      );
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Urban" &&
                        data?.incidentTime === "Not Applicable"
                      );
                    }).length
                  }
                </td>
              </tr>

              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Rural</td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.incidentTime === "Morning"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.incidentTime === "Afternoon"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.incidentTime === "Evening/Night"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.incidentTime === "Not Stated"
                      );
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
                      return (
                        data?.case?.region === "Rural" &&
                        data?.incidentTime === "Not Applicable"
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
                      return data?.incidentTime === "Morning";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.incidentTime === "Afternoon";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.incidentTime === "Evening/Night";
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allVictims.filter((data: any) => {
                      return data?.incidentTime === "Not Stated";
                    }).length
                  }
                </td>

                <td>
                  {
                    allVictims.filter((data: any) => {
                      return data?.incidentTime === "Not Applicable";
                    }).length
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====Table 10======= */}
        <h1 className="mt-8 mb-1 text-sm font-semibold">
          Tab 10: Time between incident and disclosure{" "}
        </h1>
        <div className="bg-emerald-300 rounded-lg p-4 shadow-md shadow-gray-200">
          <table className="w-full border border-black bg-white">
            <thead>
              <tr>
                <th className="border-r border-r-black" rowSpan={3}>
                  Time
                </th>
              </tr>
              <tr>
                <th colSpan={6}>Region</th>
              </tr>
              <tr className="border-t border-t-black">
                <th className="border-r border-r-black">Urban</th>
                <th className="border-r border-r-black">Rural</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* ==0-3 days== */}
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">0-3 days</td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" && data?.tbid === "0 - 3 days"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" && data?.tbid === "0 - 3 days"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
                      return data?.tbid === "0 - 3 days";
                    }).length
                  }
                </td>
              </tr>

              {/* ==4-5 days== */}
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">4-5 days</td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" && data?.tbid === "4 - 5 days"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" && data?.tbid === "4 - 5 days"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
                      return data?.tbid === "4 - 5 days";
                    }).length
                  }
                </td>
              </tr>

              {/* ==6-14 days */}
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">6-14 days</td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" && data?.tbid === "6 - 14 days"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" && data?.tbid === "6 - 14 days"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
                      return data?.tbid === "6 - 14 days";
                    }).length
                  }
                </td>
              </tr>

              {/* ==2 weeks - 1 month== */}
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">2 weeks - 1 month</td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.tbid === "2 weeks - 1 month"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.tbid === "2 weeks - 1 month"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
                      return data?.tbid === "2 weeks - 1 month";
                    }).length
                  }
                </td>
              </tr>

              {/* ==More than 1 month== */}
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">more than 1 month</td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.tbid === "more than a month"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.tbid === "more than a month"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
                      return data?.tbid === "more than a month";
                    }).length
                  }
                </td>
              </tr>

              {/* ==Not Specified== */}
              <tr className="border-t border-t-black py-2 text-center">
                <td className="border-r border-r-black">Not Specified</td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Urban" &&
                        data?.tbid === "Not Specified"
                      );
                    }).length
                  }
                </td>
                <td className="border-r border-r-black">
                  {
                    allCases.filter((data: any) => {
                      return (
                        data?.region === "Rural" &&
                        data?.tbid === "Not Specified"
                      );
                    }).length
                  }
                </td>
                <td>
                  {
                    allCases.filter((data: any) => {
                      return data?.tbid === "Not Specified";
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