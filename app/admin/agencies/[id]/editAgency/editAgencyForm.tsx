"use client";
import { agencySchema } from "@/schema/agency";
import { editUserSchema } from "@/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TbUsersGroup } from "react-icons/tb";
import { toast } from "react-toastify";

type Props = {
  agency: any | null;
  id: string;
};

function EditAgencyForm({ agency, id }: Props) {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(agencySchema),
    defaultValues: agency || {},
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/agency/${id}`, {
        method: "PUT",
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
      toast.success("Agency details updated", {
        position: "top-right",
      });
      return push(`/admin/agencies`);
    } catch (error) {
      console.log(error);
      return toast.error("Update Error", {
        position: "top-right",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ===inputs=== */}

      {/* ===Agency Name/Email=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Service Provider Name</label>
          <input
            {...register("name", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">Agency Name is required.</p>
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
            <p className="text-red-500 text-xs">Phone Number 1 is required.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Phone Number 2</label>
          <input
            {...register("phone2")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.phone2 && (
            <p className="text-red-500 text-xs">Phone number is required.</p>
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
  );
}

export default EditAgencyForm;
