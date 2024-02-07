"use client";
import { registerUserSchema } from "@/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GrChapterNext } from "react-icons/gr";
import { TbUsersGroup } from "react-icons/tb";
import { toast } from "react-toastify";

type Props = {
  serviceProviders: any;
};

function Form({ serviceProviders }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerUserSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data?.firstName,
          lastName: data?.lastName,
          role: data?.role,
          email: data?.email,
          phoneNumber: data?.phoneNumber,
          gender: data?.gender,
          branch: data?.branch,
          password: data?.password,
          confirmPassword: data?.confirmPassword,
        }),
      });
      setLoading(false);
      const res = response.status;
      if (res === 400) {
        return toast.error("Email already in use", {
          position: "top-right",
        });
      } else res === 200;
      {
        toast.success("Registration Successful", {
          position: "top-right",
        });
        return reset();
      }
    } catch (error) {
      return toast.error("Error in registration", {
        position: "top-right",
      });
    }
  };
  return (
    <div>
      <div className="bg-white rounded-lg p-4 w-full">
        <div className="flex items-center gap-2 px-4 border-b border-b-themeColor mb-4">
          <TbUsersGroup /> <h1 className="text-lg font-semibold">Add Staff</h1>
        </div>
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
                <p className="text-red-500 text-xs">
                  Phone number is required.
                </p>
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
                <option value={""}>Select an Option</option>
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
          {/* ===password/cpnfirmpassword=== */}
          <div className="flex flex-col mt-3">
            <label className="text-xs">Password</label>
            <input
              {...register("password", { required: true })}
              className="bg-gray-50 border border-themeColor px-2 py-2 rounded-md text-xs"
              placeholder="******"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">
                Password must be more than 5 characters.
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-xs">Confirm Password</label>
            <input
              {...register("confirmPassword", { required: true })}
              className="bg-gray-50 border border-themeColor px-2 py-2 rounded-md text-xs"
              placeholder="******"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">Passwords must match.</p>
            )}
          </div>

          <div className="mt-4 flex justify-center items-center">
            <button className="bg-themeColor hover:bg-darkTheme hover:font-bold px-12 py-2 text-white text-sm rounded-md flex justify-center items-center gap-2">
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
