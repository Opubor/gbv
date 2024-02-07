"use client";
import { editUserSchema } from "@/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TbUsersGroup } from "react-icons/tb";
import { toast } from "react-toastify";

type Props = {
  staff: any | null;
  id: string;
  serviceProviders: any;
};

function EditStaffForm({ staff, id, serviceProviders }: Props) {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(editUserSchema),
    defaultValues: staff || {},
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data?.firstName,
          lastName: data?.lastName,
          role: data?.role,
          email: data?.email,
          phoneNumber: data?.phoneNumber,
          gender: data?.gender,
          branch: data?.branch,
        }),
      });
      setLoading(false);
      toast.success("Staff details updated", {
        position: "top-right",
      });
      return push(`/admin/staffs`);
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ===inputs=== */}

      {/* ===firstname/lastname=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">First Name</label>
          <input
            {...register("firstName", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">First Name is required.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">Last Name is required.</p>
          )}
        </div>
      </div>

      {/* ===email/phoneNumber=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">Email is required.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Phone Number</label>
          <input
            {...register("phoneNumber", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs">Phone number is required.</p>
          )}
        </div>
      </div>

      {/* ===gender/branch=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Gender</label>
          <input
            {...register("gender", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.gender && (
            <p className="text-red-500 text-xs">Gender is required.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Branch</label>

          <select
            {...register("branch", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={staff?.userBranch?.id}>
              {staff?.userBranch?.name}
            </option>
            {serviceProviders?.map((data: any) => (
              <option key={data?.id} value={data?.id}>
                {data?.name}
              </option>
            ))}
          </select>
          {errors.branch && (
            <p className="text-red-500 text-xs">Branch is required.</p>
          )}
        </div>
      </div>

      {/* ===role=== */}
      <div className="flex flex-col mt-3">
        <label className="text-xs">Role</label>
        <select
          {...register("role", { required: true })}
          className="border border-themeColor px-2 py-2 rounded-md text-sm"
        >
          <option>Select a role</option>
          <option value={"2"}>Admin</option>
          <option value={"1"}>Staff</option>
        </select>

        {errors.role && (
          <p className="text-red-500 text-xs">Please select a role.</p>
        )}
      </div>

      <div className="mt-4 flex justify-center items-center">
        <button className="bg-themeColor hover:bg-darkTheme hover:font-bold px-12 py-2 text-white text-sm rounded-md flex justify-center items-center gap-2">
          {loading ? "Loading..." : "Edit"}
        </button>
      </div>
    </form>
  );
}

export default EditStaffForm;
