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
import { getAllAgencies } from "@/services/agency";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DeleteAgency from "./deleteAgency/deleteAgency";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schema/search";
import TableLoader from "@/components/TableLoader";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

function Page() {
  // const agencies = await getAllAgencies();
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const [agencies, setAgencies] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const getAllAgencies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/agency/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setAgencies(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  const search = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/agency/?search=${data?.search}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setAgencies(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAgency = async (id: string) => {
    try {
      const response = await fetch(`/api/agency/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      getAllAgencies();
      return toast.success("Agency deleted successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAgencies();
  }, []);
  return (
    <div className="w-full">
      {/* =======Page Name========== */}
      <PageName
        page1="Service Providers"
        page2="Add Service Provider"
        page1Link="/admin/agencies"
        page2Link="/admin/agencies/addAgency"
      />

      {/* ===Actions */}
      <div className="flex justify-between items-center gap-64 w-full my-2 lg:my-4">
        <form className="w-full" onSubmit={handleSubmit(search)}>
          <div className="flex justify-start items-center gap-2 w-5/6">
            <input
              {...register("search")}
              placeholder="Service provider name"
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
                <Th>Phone 1</Th>
                <Th>Phone 2</Th>
                <Th>Address</Th>
                {session?.user?.role === "2" && <Th>Options</Th>}
              </Tr>
            </Thead>

            <Tbody>
              {agencies?.map((data: any, i: any) => (
                <Tr key={data?.id}>
                  <Td>{i + 1}</Td>
                  <Td>{data?.name}</Td>
                  <Td>{data?.email}</Td>
                  <Td>{data?.phone1}</Td>
                  <Td>{data?.phone2}</Td>
                  <Td>
                    <p className="w-44 truncate">{data?.address}</p>
                  </Td>
                  {session?.user?.role === "2" && (
                    <OptionsTd>
                      <ViewButton
                        href={`/admin/agencies/${data?.id}/viewAgency`}
                      />
                      <EditButton
                        href={`/admin/agencies/${data?.id}/editAgency`}
                      />
                      <DeleteButton onClick={() => deleteAgency(data?.id)} />
                    </OptionsTd>
                  )}
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
