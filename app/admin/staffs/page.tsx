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
import { getAllUsers } from "@/services/user";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DeleteStaff from "./deleteStaff/deleteStaff";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schema/search";
import TableLoader from "@/components/TableLoader";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

function Page() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any>();

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setUsers(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  const search = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/?search=${data?.search}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      return setUsers(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStaff = async (id: string) => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      getAllUsers();
      return toast.success("Staff deleted successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="w-full">
      {/* =======Page Name========== */}
      <PageName
        page1="Staffs"
        page2="Add Staff"
        page1Link="/admin/staffs"
        page2Link="/admin/staffs/addStaff"
      />

      {/* ===Actions */}
      <div className="flex justify-between items-center gap-64 w-full my-2 lg:my-4">
        <form className="w-full" onSubmit={handleSubmit(search)}>
          <div className="flex justify-start items-center gap-2 w-5/6">
            <input
              {...register("search")}
              placeholder="Staff name"
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
                <Th>Gender</Th>
                <Th>Branch</Th>
                <Th>Role</Th>
                {session?.user?.role === "2" && <Th>Options</Th>}
              </Tr>
            </Thead>

            <Tbody>
              {users?.map((data: any, i: any) => (
                <Tr key={data?.id}>
                  <Td>{i + 1}</Td>
                  <Td>
                    {data?.firstName} {data?.lastName}
                  </Td>
                  <Td>{data?.email}</Td>
                  <Td>{data?.phoneNumber}</Td>
                  <Td>{data?.gender}</Td>
                  <Td>{data?.userBranch?.name}</Td>
                  <Td>{data?.role === "2" ? "Admin" : "Staff"}</Td>
                  {session?.user?.role === "2" && (
                    <OptionsTd>
                      <ViewButton
                        href={`/admin/staffs/${data?.id}/viewStaff`}
                      />
                      <EditButton
                        href={`/admin/staffs/${data?.id}/editStaff`}
                      />
                      <DeleteButton onClick={() => deleteStaff(data?.id)} />
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
