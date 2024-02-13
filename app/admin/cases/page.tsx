"use client";
import PageName from "@/components/PageName";
import DeleteButton from "@/components/buttons/DeleteButton";
import EditButton from "@/components/buttons/EditButton";
import ViewButton from "@/components/buttons/ViewButton";
import OptionsTd from "@/components/table/OptionsTd";
import Table from "@/components/table/Table";
import Tbody from "@/components/table/Tbody";
import Td from "@/components/table/Td";
import Th from "@/components/table/Th";
import Thead from "@/components/table/Thead";
import Tr from "@/components/table/Tr";
import prisma from "@/lib/prisma-client";
// import { getAllCases } from "@/services/case";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { FaArrowCircleRight, FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import DeleteCase from "./DeleteCase";
import { getAllCases } from "@/services/case";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schema/search";
import TableLoader from "@/components/TableLoader";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import ReactToPrint from "react-to-print";
import { MdOutlinePrint } from "react-icons/md";

function Page() {
  const [loading, setLoading] = useState(false);
  const [cases, setCases] = useState<any>();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const getAllCases = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/case/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setCases(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  const search = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/case/?search=${data?.search}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setCases(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCase = async (id: string) => {
    try {
      const response = await fetch(`/api/case/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        toast.success("Case deleted Successful", {
          position: "top-right",
        });
        return getAllCases();
      } else if (response?.status === 404) {
        return toast.error("Error during delete", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCases();
  }, []);

  return (
    <div className="w-full">
      {/* ===Page Name=== */}
      <PageName
        page1="Cases"
        page2="Add Case"
        page1Link="/admin/cases"
        page2Link="/admin/cases/addCase/serviceProvider"
      />

      {/* ===Actions */}
      <div className="flex justify-between items-center w-full my-2 lg:my-4">
        <form className="w-12/12 lg:w-9/12" onSubmit={handleSubmit(search)}>
          <div className="flex justify-start items-center gap-2 w-5/6">
            <input
              {...register("search")}
              placeholder="Case ID"
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
        <div className="">
          <h1 className="text-sm">
            Total Number of Cases:{" "}
            <span className="font-semibold bg-purple-300 px-2 py-1 rounded-md">
              {cases?.length}
            </span>
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-lg py-4 w-full">
        {loading ? (
          <TableLoader />
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th>S/N</Th>
                <Th>Case ID</Th>
                <Th>Service Provider</Th>
                <Th>Victim Name</Th>
                <Th>Registered by</Th>
                <Th>Reg. date</Th>
                <Th>Residential Village</Th>
                <Th>Immediate Protection</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>

            <Tbody>
              {cases?.map((data: any, i: any) => (
                <Fragment key={data?.id}>
                  <Tr>
                    <Td>{i + 1}</Td>
                    <Td>{data?.caseId}</Td>
                    <Td>{data?.serviceProvider?.name}</Td>
                    <Td>
                      {data?.Victim.at(0)?.firstName}{" "}
                      {data?.Victim.at(0)?.lastName}
                    </Td>
                    <Td>
                      <p className="w-24 truncate">{data?.registeredBy}</p>
                    </Td>
                    <Td>
                      {data?.registrationDate} - {data?.registrationTime}
                    </Td>

                    <Td>{data?.Victim.at(0)?.residentialVillage}</Td>
                    <Td>{data?.Victim.at(0)?.immediateProtection}</Td>

                    <OptionsTd>
                      <ViewButton href={`/admin/cases/viewCase/${data?.id}`} />
                      <EditButton
                        href={`/admin/cases/editCase/${data?.id}/serviceProvider`}
                      />
                      {session?.user?.role === "2" && (
                        <DeleteButton onClick={() => deleteCase(data?.id)} />
                      )}
                    </OptionsTd>
                  </Tr>
                  <Tr extraClass="pb-24">
                    <Td>
                      <div className="flex justify-center">
                        <FaArrowCircleRight className="text-orange-500 text-center text-2xl" />
                      </div>
                    </Td>

                    <Td>
                      {data?.Victim.at(0) ? (
                        <Link
                          className="bg-blue-700 hover:bg-blue-900 px-8 py-2 text-white text-xs rounded-sm flex justify-center items-center"
                          href={`/admin/cases/editCase/${
                            data?.Victim.at(0)?.id
                          }/victimDetails`}
                        >
                          <CiEdit className="text-white text-lg" />
                          Edit Victim Details
                        </Link>
                      ) : (
                        <Link
                          className="text-blue-900 hover:bg-blue-100 px-8 py-2 bg-white border border-blue-900 text-xs rounded-sm flex justify-center items-center"
                          href={`/admin/cases/addCase/${data?.id}/victimDetails`}
                        >
                          <FaPlus className="text-md" />
                          Add Victim Details
                        </Link>
                      )}
                    </Td>

                    <Td>
                      {data?.Perpetrator.at(0) ? (
                        <Link
                          className="bg-green-700 hover:bg-green-900 px-8 py-2 text-white text-xs rounded-sm flex justify-center items-center"
                          href={`/admin/cases/editCase/${
                            data?.Perpetrator.at(0)?.id
                          }/perpetratorDetails`}
                        >
                          <CiEdit className="text-white text-lg" />
                          Edit Perpetrator Details
                        </Link>
                      ) : (
                        <Link
                          className="text-green-900 hover:bg-green-100 px-8 py-2 bg-white border border-green-900 text-xs rounded-sm flex justify-center items-center"
                          href={`/admin/cases/addCase/${data?.id}/perpetratorDetails`}
                        >
                          <FaPlus className="text-md" />
                          Add Perpetrator Details
                        </Link>
                      )}
                    </Td>

                    <Td>
                      {data?.GbvInformation.at(0) ? (
                        <Link
                          className="bg-orange-700 hover:bg-orange-900 px-8 py-2 text-white text-xs rounded-sm flex justify-center items-center"
                          href={`/admin/cases/editCase/${
                            data?.GbvInformation.at(0)?.id
                          }/gbvInformation`}
                        >
                          <CiEdit className="text-white text-lg" />
                          Edit GBV Information
                        </Link>
                      ) : (
                        <Link
                          className="text-orange-900 hover:bg-orange-100 px-8 py-2 bg-white border border-orange-900 text-xs rounded-sm flex justify-center items-center"
                          href={`/admin/cases/addCase/${data?.id}/gbvInformation`}
                        >
                          <FaPlus className="text-md" /> Add GBV Information
                        </Link>
                      )}
                    </Td>
                  </Tr>
                </Fragment>
              ))}
            </Tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default Page;
