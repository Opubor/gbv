"use client";
import PageName from "@/components/PageName";
import EditButton from "@/components/buttons/EditButton";
import OptionsTd from "@/components/table/OptionsTd";
import Table from "@/components/table/Table";
import Tbody from "@/components/table/Tbody";
import Td from "@/components/table/Td";
import Th from "@/components/table/Th";
import Thead from "@/components/table/Thead";
import Tr from "@/components/table/Tr";
import { getAllUsers } from "@/services/user";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DeleteStaff from "../staffs/deleteStaff/deleteStaff";
import ViewButton from "@/components/buttons/ViewButton";
import { getAllGetHelp } from "@/services/getHelp";
import MarkAsConnected from "./MarkAsConnected";
import { GrStatusGood } from "react-icons/gr";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schema/search";
import TableLoader from "@/components/TableLoader";

function Page() {
  // const getHelp = await getAllGetHelp();
  const [loading, setLoading] = useState(false);
  const [getHelp, setGetHelp] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const getGetHelpRequests = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/getHelp/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setGetHelp(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  const search = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/getHelp/?search=${data?.search}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setGetHelp(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGetHelpRequests();
  }, []);

  return (
    <div className="w-full">
      {/* =======Page Name========== */}
      <div className="flex justify-start">
        <div className="bg-themeColor hover:bg-darkTheme px-12 py-2 rounded-md text-xs lg:text-sm lg:font-semibold text-white shadow-md shadow-gray-200">
          Get Help Requests
        </div>
      </div>

      {/* ===Actions */}
      <div className="flex justify-between items-center gap-64 w-full my-2 lg:my-4">
        <form className="w-full" onSubmit={handleSubmit(search)}>
          <div className="flex justify-start items-center gap-2 w-5/6">
            <input
              {...register("search")}
              placeholder="Name"
              className="bg-white rounded-full border border-themeColor px-4 py-1 lg:py-2 w-full text-sm focus:outline-lightThemeColor"
              type="search"
            />
            {errors.search && (
              <p className="text-red-500 text-xs">Search is required.</p>
            )}
            <button className="bg-white border border-themeColor p-1 lg:p-2 rounded-full">
              <div>
                <AiOutlineSearch size={20} />
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* ===========Table=========== */}
      <div className="bg-white rounded-lg py-4 w-full">
        {loading ? (
          <TableLoader />
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th>S/N</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>Date</Th>
                <Th>Immediate danger?</Th>
                <Th>Contacted</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>

            <Tbody>
              {getHelp?.map((data: any, i: any) => (
                <Tr key={data?.id}>
                  <Td>{i + 1}</Td>
                  <Td>{data?.username}</Td>
                  <Td>{data?.email}</Td>
                  <Td>{data?.phone}</Td>
                  <Td>{data?.createdAt.toString().slice(0, 25)}</Td>
                  <Td>
                    {data?.immediateDanger === true ? (
                      <span className="font-bold underline">Yes</span>
                    ) : (
                      "No"
                    )}
                  </Td>
                  <Td>
                    {data?.contacted === "Yes" ? (
                      <span className="font-bold underline">Yes</span>
                    ) : (
                      "No"
                    )}
                  </Td>
                  <OptionsTd>
                    {data?.contacted === "Yes" ? (
                      <h1 className="bg-lime-500 px-2 py-1 rounded-md text-white text-xs flex items-center gap-1 justify-center">
                        <span>Contacted</span>
                        <GrStatusGood />
                      </h1>
                    ) : (
                      <MarkAsConnected helpRequestId={data?.id} />
                    )}

                    <ViewButton href={`/admin/get-help/${data?.id}/view`} />
                  </OptionsTd>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default Page;
