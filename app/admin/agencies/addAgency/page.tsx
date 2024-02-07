"use client";
import { agencySchema } from "@/schema/agency";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MdHouseSiding } from "react-icons/md";
import { toast } from "react-toastify";

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(agencySchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/agency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data?.name,
          email: data?.email,
          phone1: data?.phone1,
          phone2: data?.phone2,
          phoneNumber: data?.phoneNumber,
          // founded: data?.founded,
          city: data?.city,
          address: data?.address,
          // about: data?.about,
          // branch: data?.branch,
        }),
      });
      setLoading(false);

      toast.success("Agency added Successful", {
        position: "top-right",
      });
      return reset();
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
          <MdHouseSiding />{" "}
          <h1 className="text-lg font-semibold">Add Agency</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ===inputs=== */}

          {/* ===Agency Name/Email=== */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs font-semibold">
                Service Provider Name
              </label>
              <input
                {...register("name", { required: true })}
                className="border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  Service Provider Name is required.
                </p>
              )}
            </div>
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs font-semibold">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">Email is required.</p>
              )}
            </div>
          </div>

          {/* ===Phone Number 1/Phone Number 2=== */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs font-semibold">Phone Number 1</label>
              <input
                {...register("phone1", { required: true })}
                className="border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.phone1 && (
                <p className="text-red-500 text-xs">
                  Phone Number 1 is required.
                </p>
              )}
            </div>
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs font-semibold">Phone Number 2</label>
              <input
                {...register("phone2")}
                className="border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.phone2 && (
                <p className="text-red-500 text-xs">
                  Phone number is required.
                </p>
              )}
            </div>
          </div>

          {/* ===Founded/CIty=== */}
          <div className="flex justify-between items-center gap-4">
            {/* <div className="flex flex-col mt-2 w-full">
              <label className="text-xs font-semibold">Founded</label>
              <input
                {...register("founded")}
                className="border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.founded && (
                <p className="text-red-500 text-xs">Founded is required.</p>
              )}
            </div> */}
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs font-semibold">City</label>

              <input
                {...register("city", { required: true })}
                className="border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.city && (
                <p className="text-red-500 text-xs">City is required.</p>
              )}
            </div>
          </div>

          {/* ===Branch=== */}
          {/* <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Branch</label>
            <input
              {...register("branch")}
              className="border border-themeColor px-2 py-1 rounded-md"
            />
            {errors.branch && (
              <p className="text-red-500 text-xs">Branch is required.</p>
            )}
          </div> */}

          {/* ===Address=== */}
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Address</label>

            <textarea
              {...register("address", { required: true })}
              className="border border-themeColor px-2 py-1 rounded-md"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-xs">Address is required.</p>
            )}
          </div>

          {/* ===About=== */}
          {/* <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">About</label>

            <textarea
              {...register("about", { required: true })}
              className="border border-themeColor px-2 py-1 rounded-md"
            ></textarea>
            {errors.about && (
              <p className="text-red-500 text-xs">About is required.</p>
            )}
          </div> */}

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

export default Page;
